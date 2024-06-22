interface ICardProps {
    title: string;
    description: string;
    size?: 'small' | 'medium' | 'large';
    className?: string; // Дополнительные классы для карточки
    background?: React.CSSProperties; // Задний фон карточки - объект стилей для React;  // Задний фон карточки

}
  
export default ICardProps;
  