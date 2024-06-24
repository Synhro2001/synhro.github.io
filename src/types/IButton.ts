export interface IButton{
    label: string;
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
    className?: string; 
    style?: React.CSSProperties; 
    disabled?: boolean; 
    type?: 'button' | 'submit' | 'reset';
}