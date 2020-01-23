import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'
import Modal, { ModalTemplateHandler } from './ModalTemplate'

type PropType = {
    label: string;
    setWasm: React.Dispatch<React.SetStateAction<Uint8Array | null>>;
    setMetadata: React.Dispatch<React.SetStateAction<string | null>>;
}

const LocalWasmSelectModalButton = ({ label, setWasm, setMetadata }: PropType) => {

    const modalRef = useRef({} as ModalTemplateHandler);

    return (<>
        <Button style={{ marginBottom: "10px", width: "100%" }} color="primary" variant="contained" onClick={() => modalRef.current.handleOpen()}>
            {label}
        </Button>
        <Modal
            ref={modalRef}
        >
            <Button style={{ marginBottom: "10px", width: "100%" }} color="primary" variant="contained">
                select wasm
                <input
                    type="file"
                    onChange={(e:any) => {
                        var file = e.target.files[0];
                        const bytes = new Uint8Array(file);
                        setWasm(bytes);
                    }}
                    style={{ opacity: 0, appearance: "none", position: "absolute" }}
                    accept="application/wasm"
                />
            </Button>
            <Button style={{ marginBottom: "10px", width: "100%" }} color="primary" variant="contained">
                select metadata
                <input
                    type="file"
                    onChange={(e:any) => {
                        var file = e.target.files[0];
                        setMetadata(file);
                    }}
                    style={{ opacity: 0, appearance: "none", position: "absolute" }}
                    accept="application/json"
                />
            </Button>
        </Modal>
    </>)
}

export default LocalWasmSelectModalButton;
