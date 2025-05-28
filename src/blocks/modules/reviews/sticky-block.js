import StickySidebar from "sticky-sidebar-v2";

export const stickyBlock = () => {
    const sidebar = new StickySidebar('.reviews-callback', {
        topSpacing: 20,
        bottomSpacing: 20,
        containerSelector: '.reviews-wrapper',
        innerWrapperSelector: '.js-sticky-block',
        minWidth: 1023
    });
}