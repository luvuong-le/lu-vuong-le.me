import styled from "@emotion/styled"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
`

export default Overlay
