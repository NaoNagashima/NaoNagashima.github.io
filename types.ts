
export interface Project {
  id: string;
  time: string;
  destination: string;
  status: string;
  platform: string;
  description: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface NavItem {
  label: string;
  targetId: string;
}
