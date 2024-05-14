function FeatureItem(props) {
    const { imgSrc, alt, title, text } = props;
    return (
        <div className="feature-item">
            <img src={imgSrc} alt={alt} className="feature-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default FeatureItem;