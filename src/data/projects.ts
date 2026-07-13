export interface Project {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  image: string;
  images: string[];
  accent: string;
  overview: string;
  challenge: string;
  outcome: string;
}

export const featuredProjects: Project[] = [
  {
    title: 'SEIFence Gen2',
    summary: 'An IoT tracker platform combining ESP32, GPS, GSM, and RTOS-driven firmware for connected field devices.',
    tags: ['ESP32', 'RTOS', 'Manufacturing', 'GPS'],
    href: '/projects/seifence',
    image: '/images/projects/seifence/hero.jpg',
    images: ['/images/projects/seifence/hero.jpg', '/images/projects/seifence/detail-1.jpg', '/images/projects/seifence/detail-2.jpg'],
    accent: 'from-sky-500/30 to-cyan-400/10',
    overview: 'The project focused on a compact tracker designed for field deployment, reliable telemetry, and manufacturable assembly.',
    challenge: 'The main challenge was combining wireless connectivity, positioning, and resilient firmware in a compact enclosure for real-world deployment.',
    outcome: 'The final system delivered dependable tracking, strong manufacturability, and a clear path to scaled deployment.',
  },
  {
    title: 'Battery Management System',
    summary: 'A 3-cell battery management system with charger control, protection logic, and power-stage design.',
    tags: ['BMS', 'Power', 'Protection', 'DC/DC'],
    href: '/projects/bms',
    image: '/images/projects/bms/hero.jpg',
    images: ['/images/projects/bms/hero.jpg', '/images/projects/bms/detail-1.jpg', '/images/projects/bms/detail-2.jpg'],
    accent: 'from-emerald-500/30 to-lime-400/10',
    overview: 'This work centered on protecting a multi-cell energy storage system while preserving efficiency and safe charging behavior.',
    challenge: 'The design required balancing protection accuracy, high-current switching, and a practical layout for assembly and validation.',
    outcome: 'The solution improved safe operation and created a robust foundation for the power stage and monitoring logic.',
  },
  {
    title: 'Industrial IoT Gateway',
    summary: 'A rugged gateway for industrial telemetry with RS485, BLE, Wi-Fi, and 4G connectivity.',
    tags: ['ESP32-S3', 'RS485', 'Wi-Fi', 'BLE'],
    href: '/projects/industrial-iot-gateway',
    image: '/images/projects/gateway/hero.jpg',
    images: ['/images/projects/gateway/hero.jpg', '/images/projects/gateway/detail-1.jpg', '/images/projects/gateway/detail-2.jpg'],
    accent: 'from-violet-500/30 to-fuchsia-400/10',
    overview: 'The gateway was engineered to connect industrial equipment to cloud-based monitoring using resilient communications.',
    challenge: 'The project needed strong industrial protocol support, long-term stability, and interface flexibility across multiple transport layers.',
    outcome: 'The gateway delivered a strong communications foundation for remote monitoring and practical field deployment.',
  },
];
