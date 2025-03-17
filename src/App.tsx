import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MousePointer2, Loader2, MessageCircleQuestion, FileQuestionIcon, InfoIcon, PowerCircle, PowerIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';

// Define a global style for consistent and accessible background
const AccessibleGlobalStyle = () => {
    useEffect(() => {
    document.body.style.backgroundColor = '#E0F7FA'; // Light and refreshing background color
    document.body.style.color = '#2D3748'; // Dark text for better readability against light background
    document.body.style.margin = '0'; // Reset default margin for full viewport canvas
    document.body.style.overflow = 'hidden'; // Prevent scrollbars for canvas
    return () => {
      document.body.style.backgroundColor = ''; // Revert background color on unmount
      document.body.style.color = ''; // Revert text color on unmount
      document.body.style.margin = ''; // Revert margin on unmount
      document.body.style.overflow = ''; // Revert overflow on unmount
    };
  }, []);
  return null;
};

// Calculate container dimensions and particle count based on screen size for responsiveness
const getContainerDimensions = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  let containerWidth = 25; // Base container width
  let particleCount = PARTICLE_COUNT; // Start with default particle count

  // Adjust dimensions and particle count for different screen sizes to optimize performance
  if (window.innerWidth < 768) {
    containerWidth = 15; // Smaller container for mobile devices
    particleCount = Math.floor(PARTICLE_COUNT * 0.6); // Reduce particle count for mobile performance
  } else if (window.innerWidth < 1024) {
    containerWidth = 20; // Medium container for tablets
    particleCount = Math.floor(PARTICLE_COUNT * 0.8); // Slightly reduce particle count for tablets
  }

  const containerHeight = (containerWidth / aspectRatio) * 0.8; // Calculate height based on aspect ratio
  const usableWidth = containerWidth * 0.6; // Define usable area within the container
  const usableHeight = containerHeight * 0.6; // Define usable area within the container

  return { containerWidth, containerHeight, usableWidth, usableHeight, particleCount };
};

// Define a vibrant and accessible color palette for particles
const PARTICLE_COLORS = [
  0xFF4D4D, // Bright Red - Accessible contrast
  0xFFD700, // Gold - Accessible contrast
  0x00FA9A, // Medium Spring Green - Accessible contrast
  0x1E90FF, // Dodger Blue - Accessible contrast
  0xFF69B4, // Hot Pink - Accessible contrast
  0xFF8C00, // Dark Orange - Accessible contrast
  0x7CFC00, // Lawn Green - Accessible contrast
  0x00BFFF  // Deep Sky Blue - Accessible contrast
];

const PARTICLE_COUNT = 600; // Number of particles, adjusted based on screen size
const MIN_PARTICLE_RADIUS = 0.06; // Minimum particle radius
const MAX_PARTICLE_RADIUS = 0.12; // Maximum particle radius
const MOUSE_REPULSION_RADIUS = 1.2; // Radius within which mouse interaction affects particles
// const VISUAL_BOUNDARY_RADIUS = 0.6; // Radius for visual boundary (if needed)
const MAX_PARTICLE_VELOCITY = 0.02; // Maximum particle velocity
const VELOCITY_DAMPING_FACTOR = 0.97; // Damping factor to reduce velocity over time
const ATTRACTION_FORCE = 0.01; // Force pulling particles back to their original positions
const GRAVITATIONAL_FORCE = 0.0003; // Simulate a subtle gravitational pull
const MOVEMENT_DRAG = 0.01; // Drag force to slow down particles

// Utility function to clamp values within a specified range
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const ParticleAnimation = () => {
  const animationContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the container element
  const particleMeshesRef = useRef<THREE.Mesh[]>([]); // Ref to store particle mesh objects
  const mousePositionRef = useRef({ x: 0, y: 0 }); // Ref to track mouse position
  const webGLRendererRef = useRef<THREE.WebGLRenderer | null>(null); // Ref for the WebGL renderer
  const threeSceneRef = useRef<THREE.Scene | null>(null); // Ref for the Three.js scene
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera | null>(null); // Ref for the perspective camera
  const repulsionToggleButtonRef = useRef<HTMLButtonElement | null>(null); // Ref for the toggle button
  const [isRepulsionEnabled, setRepulsionEnabled] = useState(true); // State to control repulsion effect
  const isRepulsionEnabledRef = useRef(isRepulsionEnabled); // Ref to keep track of repulsion effect in animation loop
  const [isLoading, setIsLoading] = useState(true); // State to manage loading indicator
  const [animationContainerDimensions, setAnimationContainerDimensions] = useState({ width: window.innerWidth, height: window.innerHeight }); // State for container dimensions

  const lastToggleTimestampRef = useRef(0); // Ref to debounce toggle interactions

  // Update ref when state changes for use in animation loop
  useEffect(() => {
    isRepulsionEnabledRef.current = isRepulsionEnabled;
  }, [isRepulsionEnabled]);

  // Toggle repulsion effect with debouncing for smoother user experience
  const handleToggleRepulsion = useCallback(() => {
    const now = Date.now();
    if (now - lastToggleTimestampRef.current > 300) { // Debounce time of 300ms
      lastToggleTimestampRef.current = now;

      setRepulsionEnabled(prev => {
        const nextRepulsionState = !prev;

        if (nextRepulsionState) {
          toast.success('Repulsion Effect Enabled', {
            description: 'Particles will now react to your cursor.',
            icon: <MousePointer2 className="text-blue-600" />,
            duration: 2000,
            position: 'top-right'
          });
        } else {
          toast.info('Repulsion Effect Disabled', {
            description: 'Particles will gently return to their original positions.',
            icon: <MousePointer2 className="text-gray-600" />,
            duration: 2000,
            position: 'top-right'
          });
        }
        return nextRepulsionState;
      });
    }
  }, []);

  // Initialize and setup Three.js scene, camera, renderer, and particles
  useEffect(() => {
    const scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000); // Perspective camera for 3D view
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // WebGL renderer with antialiasing and alpha

    renderer.setClearColor(new THREE.Color('#E0F7FA'), 1); // Set clear color to match background
    renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size to window dimensions
    renderer.setPixelRatio(window.devicePixelRatio); // Set pixel ratio for sharper rendering

    if (animationContainerRef.current) {
      animationContainerRef.current.appendChild(renderer.domElement); // Append renderer to container
    }

    threeSceneRef.current = scene;
    perspectiveCameraRef.current = camera;
    webGLRendererRef.current = renderer;

    const { containerWidth, containerHeight, usableWidth, usableHeight, particleCount } = getContainerDimensions();
    setAnimationContainerDimensions({ width: containerWidth, height: containerHeight });

    const particles: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhysicalMaterial, THREE.Object3DEventMap>[] = []; // Array to hold particle meshes
    let particlesLoadedCount = 0; // Counter to track loaded particles

    const updateLoadingProgress = () => {
      particlesLoadedCount++;
      if (particlesLoadedCount >= particleCount) {
        setTimeout(() => setIsLoading(false), 500); // Hide loading indicator after particles are loaded
      }
    };

    // Create particle geometries, materials, and meshes with vibrant colors and lighting
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2; // Random angle for particle placement
      const radius = Math.sqrt(Math.random()) * Math.min(usableWidth, usableHeight) * 0.5; // Random radius for particle placement
      const x = Math.cos(angle) * radius; // X position in a circular distribution
      const y = Math.sin(angle) * radius - 0.5; // Y position in a circular distribution, slightly shifted down
      const z = (Math.random() - 0.5) * 2; // Z position for depth effect
      const particleRadius = MIN_PARTICLE_RADIUS + Math.random() * (MAX_PARTICLE_RADIUS - MIN_PARTICLE_RADIUS); // Random radius for each particle
      const geometry = new THREE.SphereGeometry(particleRadius, 32, 32); // Sphere geometry for particles
      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]; // Random color from palette
      const material = new THREE.MeshPhysicalMaterial({ // Physical material for realistic lighting
        color: color,
        metalness: 0.2, // Moderate metalness for subtle reflections
        roughness: 0.1, // Low roughness for smooth surface
        clearcoat: 1.0, // Clear coat for enhanced highlights
        clearcoatRoughness: 0.1, // Low roughness for clear coat
        reflectivity: 1.0, // High reflectivity for environmental reflections
        emissive: new THREE.Color(color).multiplyScalar(0.5), // Emissive color to make particles glow slightly
        emissiveIntensity: 0.8 // Intensity of emissive glow
      });
      const particle = new THREE.Mesh(geometry, material); // Create mesh with geometry and material
      particle.position.set(x, y, z); // Set initial particle position
      particle.userData = { // Store particle specific data
        vx: 0, vy: 0, vz: 0, // Initial velocities
        originalX: x,
        originalY: y,
        originalZ: z, // Original positions for attraction force
        radius: particleRadius, // Particle radius
        color: color // Particle color
      };
      scene.add(particle); // Add particle to the scene
      particles.push(particle); // Add particle to particles array
      updateLoadingProgress(); // Update loading progress
    }
    particleMeshesRef.current = particles; // Store particles in ref

    // Lighting setup for enhanced visual appeal - softer, more ambient and rim lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Soft ambient light
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.8, 100); // Main point light for highlights
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // Directional light for general illumination
    directionalLight.position.set(-5, 5, 5);
    scene.add(directionalLight);
    const blueRimLight = new THREE.PointLight(0x4169E1, 1.0, 100); // Blue rim light for depth
    blueRimLight.position.set(0, -10, -5);
    scene.add(blueRimLight);
    const greenRimLight = new THREE.PointLight(0x00FF7F, 0.8, 100); // Green rim light for contrast
    greenRimLight.position.set(-10, 5, -5);
    scene.add(greenRimLight);
    const redRimLight = new THREE.PointLight(0xFF4500, 0.8, 100); // Red rim light for warmth
    redRimLight.position.set(10, 5, -5);
    scene.add(redRimLight);

    camera.position.set(0, 0, 5); // Position camera to view particles
    camera.lookAt(0, 0, 0); // Camera looks at the center of the scene

    // Handle mouse move events for interaction
    const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
      if (!(animationContainerRef.current instanceof HTMLDivElement)) return;
      const rect = animationContainerRef.current.getBoundingClientRect();
      mousePositionRef.current.x = ((event.clientX - rect.left) / window.innerWidth) * 2 - 1; // Normalize mouse X position
      mousePositionRef.current.y = -((event.clientY - rect.top) / window.innerHeight) * 2 + 1; // Normalize mouse Y position
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    // Animation loop for particle movement and rendering
    const animate = () => {
      if (!perspectiveCameraRef.current) return;

      particles.forEach(particle => {
        const {originalX, originalY, originalZ } = particle.userData;
        
        if (perspectiveCameraRef.current) {
          const mouseVector = new THREE.Vector3(mousePositionRef.current.x, mousePositionRef.current.y, 0.5); // Create vector from mouse position
          mouseVector.unproject(perspectiveCameraRef.current); // Convert screen space to 3D world space
          
          const cameraPosition = perspectiveCameraRef.current.position;
          const direction = mouseVector.sub(cameraPosition).normalize(); // Direction from camera to mouse
          const distance = -cameraPosition.z / direction.z; // Distance to the plane intersecting the mouse position
          const mouseWorldPosition = cameraPosition.clone().add(direction.multiplyScalar(distance)); // Calculate mouse position in world coordinates
          
          const dx = mouseWorldPosition.x - particle.position.x; // X distance from mouse to particle
          const dy = mouseWorldPosition.y - particle.position.y; // Y distance from mouse to particle
          const dist = Math.sqrt(dx * dx + dy * dy); // Distance from mouse to particle

          // Apply repulsion force if mouse is close and repulsion is enabled
          if (dist < MOUSE_REPULSION_RADIUS && isRepulsionEnabledRef.current) {
            const force = Math.pow(1 - dist / MOUSE_REPULSION_RADIUS, 2) * 0.1; // Repulsion force strength
            const angle = Math.atan2(dy, dx); // Angle from particle to mouse
            particle.userData.vx -= Math.cos(angle) * force * (1 + particle.position.z * 0.5); // Apply force in opposite direction of mouse
            particle.userData.vy -= Math.sin(angle) * force * (1 + particle.position.z * 0.5); // Apply force in opposite direction of mouse
            particle.userData.vz += (Math.random() - 0.5) * 0.001; // Slight Z-axis velocity for depth variation
          }

          // Attraction force to original position
          particle.userData.vx += (originalX - particle.position.x) * ATTRACTION_FORCE;
          particle.userData.vy += (originalY - particle.position.y) * ATTRACTION_FORCE;
          particle.userData.vz += (originalZ - particle.position.z) * ATTRACTION_FORCE * 0.5;

          // Gravity force (subtle downward pull)
          particle.userData.vy += GRAVITATIONAL_FORCE * (1 - particle.position.z * 0.5);

          // Velocity damping
          particle.userData.vx *= VELOCITY_DAMPING_FACTOR;
          particle.userData.vy *= VELOCITY_DAMPING_FACTOR;
          particle.userData.vz *= VELOCITY_DAMPING_FACTOR;

          // Drag force (slow down particles based on velocity)
          const velocity = Math.sqrt(particle.userData.vx ** 2 + particle.userData.vy ** 2);
          if (velocity > 0.001) {
            const dragForce = MOVEMENT_DRAG * velocity;
            particle.userData.vx -= (particle.userData.vx / velocity) * dragForce;
            particle.userData.vy -= (particle.userData.vy / velocity) * dragForce;
          }
          particle.userData.vz *= (1 - MOVEMENT_DRAG);

          // Clamp velocities to maximum velocity
          particle.userData.vx = clamp(particle.userData.vx, -MAX_PARTICLE_VELOCITY, MAX_PARTICLE_VELOCITY);
          particle.userData.vy = clamp(particle.userData.vy, -MAX_PARTICLE_VELOCITY, MAX_PARTICLE_VELOCITY);
          particle.userData.vz = clamp(particle.userData.vz, -MAX_PARTICLE_VELOCITY / 2, MAX_PARTICLE_VELOCITY / 2);

          // Update particle positions based on velocities
          particle.position.x += particle.userData.vx;
          particle.position.y += particle.userData.vy;
          particle.position.z = clamp(particle.position.z + particle.userData.vz, -0.5, 0.5); // Clamp Z position for depth boundaries

          // Keep particles within container bounds
          particle.position.x = clamp(particle.position.x, -animationContainerDimensions.width / 2, animationContainerDimensions.width / 2);
          particle.position.y = clamp(particle.position.y, -animationContainerDimensions.height / 2, animationContainerDimensions.height / 2);

          // Subtle particle rotation for visual interest
          particle.rotation.x += 0.001 * (1 + Math.abs(particle.userData.vx));
          particle.rotation.y += 0.001 * (1 + Math.abs(particle.userData.vy));
        }
      });

      // Sort particles by Z position for depth sorting
      particles.sort((a, b) => b.position.z - a.position.z);
      if (webGLRendererRef.current && threeSceneRef.current && perspectiveCameraRef.current) {
        webGLRendererRef.current.render(threeSceneRef.current, perspectiveCameraRef.current);
      }
      animationFrameId = requestAnimationFrame(animate); // Request next animation frame
    };

    animate(); // Start animation loop

    // Handle window resize for responsiveness
    const handleResize = () => {
      if (!perspectiveCameraRef.current || !webGLRendererRef.current) return;
      const aspectRatio = window.innerWidth / window.innerHeight;
      perspectiveCameraRef.current.aspect = aspectRatio;
      perspectiveCameraRef.current.updateProjectionMatrix();
      webGLRendererRef.current.setSize(window.innerWidth, window.innerHeight);
      const { containerWidth, containerHeight } = getContainerDimensions();
      setAnimationContainerDimensions({ width: containerWidth, height: containerHeight });
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Remove mouse move listener
      window.removeEventListener('resize', handleResize); // Remove resize listener
      if (animationFrameId) cancelAnimationFrame(animationFrameId); // Cancel animation frame
      if (animationContainerRef.current && renderer.domElement) {
        animationContainerRef.current.removeChild(renderer.domElement); // Remove renderer from container
      }
      particles.forEach(particle => { // Dispose geometries and materials
        particle.geometry.dispose();
        if (particle.material instanceof THREE.Material) particle.material.dispose();
        scene.remove(particle); // Remove particle from scene
      });
      renderer.dispose(); // Dispose renderer
    };
  }, []); // Effect runs once on mount

  // Global keydown listener for spacebar toggle - accessibility feature
  useEffect(() => {
    const handleGlobalKeyDown = (event: { key: string; preventDefault: () => void; }) => {
      if (event.key === ' ' && !isLoading) { // Spacebar key and not loading
        event.preventDefault(); // Prevent page scroll on spacebar
        handleToggleRepulsion(); // Toggle repulsion effect
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown); // Add keydown listener

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown); // Remove keydown listener on unmount
    };
  }, [isLoading, handleToggleRepulsion]); // Re-run effect if loading state or toggle function changes

  // Focus button when loading is complete for keyboard navigation
  useEffect(() => {
    if (!isLoading && repulsionToggleButtonRef.current) {
      repulsionToggleButtonRef.current.focus(); // Set focus to toggle button
    }
  }, [isLoading]); // Effect runs when loading state changes

  // Keydown handler for button - handles Enter and Space for accessibility
  const handleButtonKeyDown = (event: { key: string; preventDefault: () => void; }) => {
    if (event.key === 'Enter' || event.key === ' ') { // Enter or Space key pressed
      event.preventDefault(); // Prevent default action (like page scroll for space)
      handleToggleRepulsion(); // Toggle repulsion effect
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" role="region" aria-label="Interactive Particle Animation">
      <AccessibleGlobalStyle />
      <Toaster position="top-right" richColors aria-live="polite" /> {/* Toaster for notifications, aria-live for screen readers */}

      {/* Header section with button and title */}
      <div className="absolute top-6 left-0 right-0 z-10 px-4">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center max-w-6xl mx-auto gap-4 relative">
          {/* Title - descriptive and centered with subheading */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center">
            <h1 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-bold bg-white/80 backdrop-blur-sm py-2 px-4 rounded-lg shadow-md">
              Interactive Particle Cluster
            </h1>
      
            <p className="mt-2 flex items-center gap-2 font-medium text-sm sm:text-base whitespace-nowrap  bg-white/80 backdrop-blur-sm py-1 px-3 rounded-md shadow-sm">
              <InfoIcon className="w-4 h-4 text-blue-600 flex-shrink-0" aria-hidden="true" /> {/* Icon, aria-hidden for screen readers */}
              <span className="truncate">Move your mouse near the particles to see them react!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Loading indicator - accessible loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-gray-900/75 backdrop-blur-sm" aria-live="polite"> {/* aria-live for screen readers */}
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-12 h-12 text-white animate-spin" aria-hidden="true" /> {/* Loader icon, aria-hidden for screen readers */}
            <div className="text-white text-lg font-medium">Loading Particle Cluster...</div>
          </div>
        </div>
      )}

      {/* Container for Three.js animation */}
      <div ref={animationContainerRef} className="absolute inset-0" aria-hidden={isLoading} /> {/* aria-hidden when loading */}

      
    
  
        {/* Repulsion toggle button - Same on all screens */}
        <div className="absolute fixed bottom-6 right-6 z-10 group">
          <Button
            ref={repulsionToggleButtonRef}
            variant="outline"
            className={cn(
              "text-gray-800 bg-white/90 backdrop-blur-md hover:bg-gray-100 border border-gray-300",
              "flex items-center gap-2 shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto",
              isRepulsionEnabled
                ? "ring-2 ring-blue-400/90 ring-offset-0 bg-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                : ""
            )}
            onClick={handleToggleRepulsion}
            onKeyDown={handleButtonKeyDown}
            tabIndex={0}
            role="button"
            aria-pressed={isRepulsionEnabled}
            aria-label={`Toggle Repulsion Effect. Currently ${isRepulsionEnabled ? 'Enabled' : 'Disabled'}`}
          >
            <PowerIcon className={`w-4 h-4 ${isRepulsionEnabled ? 'text-blue-600' : 'text-gray-600'}`} aria-hidden="true" />
            <span>Repulsion Effect {isRepulsionEnabled ? 'ON' : 'OFF'}</span>
          </Button>

          {/* Tooltip for keyboard shortcut */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:left-0 sm:translate-x-0">
            <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              Press Space to toggle
            </div>
          </div>
        </div>

      

    </div>
  );
};

export default ParticleAnimation;