import React from "react";

export default function Modal(props) {
    const formRef = React.createRef();

    function hide() {
        props.onHide();
    }

    function done(e) {
        e.preventDefault();
        if (formRef.current.checkValidity()) {
            props.onDone();
            hide();
        } else {
            formRef.current.reportValidity();
        }

    }

    return (
        <>
            <div>
                <div className="modal fade show" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: props.visible ? 'block' : 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{props.header}</h5>
                                <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Закрыть" 
                                    onClick={hide}></button>
                            </div>
                            <div className="modal-body">
                                <form ref={formRef} onSubmit={done}>
                                    {props.children}
                                </form>
                                <div className="modal-footer">
                                    <button className="btn" type="button" data-bs-dismiss="modal" onClick={hide} style={{backgroundColor: 'gray'}} >Закрыть</button>
                                    <button className="btn" type="button" onClick={done} style={{backgroundColor: 'gray'}}>{props.confirm}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}