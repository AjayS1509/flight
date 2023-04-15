import styles from "./overlay.module.css";

export function Overlay({children, overlayClick, overlayStyle, desktop = false, overlayId = 'bottomSheetOverlay'}) {
    const handleClick = event => {
        if (event.target.id === overlayId) {
            overlayClick && overlayClick(true)
        }
    };

    if (desktop) return children
    else return (
        <div id={overlayId} className={overlayStyle || styles.bottomSheetOverlay} onMouseDown={handleClick}>
            {children}
        </div>
    )
}