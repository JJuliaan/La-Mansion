import React from "react";
import "./styles.css"
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button"
// import { Shop } from "../../context/ChangoShop";


const FormComp = ({confirmPurchase, formVis, setFormVis}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
      } = useForm();
    
      const onSubmit = (data) => {
        confirmPurchase(data)
        localStorage.setItem("buyer", JSON.stringify(data))
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
                                {errors?.nombre?.type === "required" && <p style={{color:"red"}}>Este campo es requerido</p>}
                                {errors?.nombre?.type === "maxLength" && (
                                    <p style={{color:"red"}}>El minimo de caracteres es 2</p>
                                )}

                                <label>Email</label>
                                <input type= "email" {...register("email", { minLength: 3, required: true })} />
                                {errors?.email?.type === "minLength" && (
                                    <p style={{color:"red"}}>El email debe poseer minimo 3 caracteres</p>
                                )}
                                {errors?.email?.type === "required" && <p style={{color:"red"}}>Este campo es requerido</p>}

                                <label>Confirmar Email</label>
                                <input type= "email" {...register("emailconfirm", { required: true, validate: (value) => value === getValues().email })} />
                                {errors?.emailconfirm?.type === "required" && <p style={{color:"red"}}>Este campo es requerido</p>}
                                {errors?.emailconfirm?.type === "validate" && <p style={{color:"red"}}>El email debe se el mismo que el anterior</p>}
                                <label>Telefono</label>
                                <input type="number" {...register("phone", { minLength: 10, maxLength: 10, required: true })} />
                                {errors?.phone?.type === "minLength" && (
                                    <p style={{color:"red"}}>El telefono debe tener minimo 10 digitos</p>
                                )}
                                {errors?.phone?.type === "maxLength" && (
                                    <p style={{color:"red"}}>El telefono debe tener maximo 10 digitos</p>
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