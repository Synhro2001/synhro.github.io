interface ICardProps {
    title: string;
    description: string;
    size?: 'small' | 'medium' | 'large';
    className?: string; 
    background?: React.CSSProperties;
    content?: React.ReactNode; 
}
  
export default ICardProps;
  