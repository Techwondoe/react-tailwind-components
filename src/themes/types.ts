export interface ITheme {
  contrast?: {
    danger: string;
    info: string;
    onSurface: string;
    primary: string;
    secondary: string;
    success: string;
    surface: string;
    warning: string;
  };
  danger?: string;
  info?: string;
  onSurface?: string;
  primary?: string;
  secondary?: string;
  success?: string;
  surface?: string;
  warning?: string;
}

export interface IMappedTheme {
  [key: string]: string | null;
}

export interface ApplyThemeProps {
  customTheme?: ITheme;
  theme: string;
}

// default theme
export const base = {
  contrast: {
    danger: '#fff',
    info: '#fff',
    onSurface: '#fff',
    primary: '#fff',
    secondary: '#fff',
    success: '#000',
    surface: '#000',
    warning: '#fff',
  },
  danger: '#ff4e4e',
  info: '#5F9DF7',
  onSurface: '#000',
  primary: '#4d89ff',
  secondary: '#999999',
  success: '#4dff4d',
  surface: '#fff',
  warning: '#ff965f',
};