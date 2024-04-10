import { redirect, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginPage.css";

function LoginPage(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data) => {
    if (Object.keys(errors).length === 0) {
      console.log("Estamos Logeados 🙆", data);
    }
  })
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col">
          <div class="card loginFormContainer">
            <div class="card-header">
              Login
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div class="mb-3">
                  <label for="usuario" class="form-label">Usuario</label>
                  <input type="text" class="form-control" id="usuario" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label for="clave" class="form-label">Clave</label>
                  <input type="password" class="form-control" id="clave" />
                </div>
                <button type="submit" class="btn btn-primary">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;