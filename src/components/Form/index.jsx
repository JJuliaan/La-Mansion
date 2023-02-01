import React from "react";
import "./styles.css"
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"

const FormComp = ({confirmPurchase, formVis, setFormVis}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        confirmPurchase(data)
      }; // your form submit function which will invoke after successful validation
    
      const handleClose = () => {
        setFormVis(false)
      }
    
      return (
        <>
            <Modal
                show={formVis}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Modal.Body>
                                <label>Nombre</label>
                                <input
                                    {...register("nombre", {
                                    required: true,
                                    minLength: 2,
                                    })}
                                />
                                {errors?.nombre?.type === "required" && <p>Este campo es requerido</p>}
                                {errors?.nombre?.type === "maxLength" && (
                                    <p>El minimo de caracteres es 2</p>
                                )}

                                <label>Email</label>
                                <input type= "email" {...register("email", { minLength: 3, required: true })} />
                                {errors?.email?.type === "minLength" && (
                                    <p>El email debe poseer minimo 3 caracteres</p>
                                )}
                                {errors?.email?.type === "required" && <p>Este campo es requerido</p>}

                                <label>Telefono</label>
                                <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
                                {errors?.phone?.type === "minLength" && (
                                    <p>El telefono debe tener minimo 10 digitos</p>
                                )}
                                {errors?.phone?.type === "required" && <p>Este campo es requerido</p>}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type= "submit">Confirm Purchase</Button>
                        </Modal.Footer>
                    </form>
            </Modal>
        </>
      );

}


export default FormComp