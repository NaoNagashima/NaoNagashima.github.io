
import { Project, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    time: '08:00',
    destination: 'SPRING BOOT TASK MANAGEMENT',
    status: 'ACTIVE',
    platform: '01',
    description: 'Built a backend task management application using Spring Boot and Thymeleaf, featuring custom authentication and role-based access control with Spring Security. Implemented secure login, registration, and robust authorization through custom security configuration.'
  },
  {
    id: '2',
    time: '14:15',
    destination: 'AI MUSIC GENERATOR',
    status: 'STABLE',
    platform: '09',
    description: 'Built a two-layer neural network from scratch in NumPy to predict the next musical note from sequences of classical MIDI data. Implemented a fully vectorized forward pass, softmax output, and backpropagation with gradient descent.'
  },
  {
    id: '3',
    time: '10:30',
    destination: 'REACT WORDLE CLONE',
    status: 'DEPLOYED',
    platform: '04',
    description: 'Developed a full-stack, multiplayer Wordle clone with a React frontend and Node.js/Express backend, using WebSockets for real-time gameplay and REST APIs for game actions. Implemented session persistence via cookies and built a dynamic, interactive UI with custom components.'
  },
  {
    id: '4',
    time: '12:15',
    destination: 'EXT2 FILE SYSTEM',
    status: 'STABLE',
    platform: '02',
    description: 'Implemented an EXT2 file system in C, supporting core operations such as file copying, removal, and directory creation. Gained experience with low-level systems programming, multithreading synchronization using locks, and Unix/Linux development tools.'
  },
  {
    id: '5',
    time: '20:30',
    destination: 'STM32 MICROCONTROLLER SECURITY SYSTEM',
    status: 'STABLE',
    platform: '05',
    description: 'Designed a microcontroller-based security system using an STM32 board with external peripherals and IoT communication over HTTPS. Implemented hardware integration with button panels and a ToF sensor using I2C and interrupt-driven programming.'
  },
  {
    id: '6',
    time: '18:00',
    destination: 'Image Filtering using CUDA GPU and CPU Multi-threading',
    status: 'STABLE',
    platform: '00',
    description: 'Developed a C++/CUDA program to compare CPU and GPU multi-threaded performance for image convolution, achieving over 250% faster GPU runtimes through optimized memory coalescing and pinned memory for faster host-device transfers.'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'INTRO', targetId: 'title' },
  { label: 'ABOUT', targetId: 'about' },
  { label: 'PROJECTS', targetId: 'projects' },
  { label: 'EXPERIANCE', targetId: 'experience' },
  { label: 'SKILLS', targetId: 'skills' },
  { label: 'ACADEMIC', targetId: 'education' },
  { label: 'CONTACT', targetId: 'contact' }
];

export const CHAR_LIST = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:.-";
