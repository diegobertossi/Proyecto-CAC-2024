let headerIndex=`
<div class="btn_menu icon-menu"></div>
<nav class="menu">
  <!-- Logo -->
  <div class="logoTextoImg" id="logo">
    <a href="#">
      <span class="logo-text">CAMPEONES DEL MUNDO</span>
      <div class="icon_logo_container">
        <img src="./img/Golden-Sta.png" class="icon_logo" alt="imagen de 3 Estrellas">
        <img src="./img/Golden-Sta.png" class="logo_logo_reflejo" alt="imagen de 3 Estrellas">
      </div>
    </a>
  </div>

  <ul class="listaNav">
    <li><a class="lista" href="#">Inicio</a></li>
    <!-- <li><a class="lista" href="./views/galeria.html">Galería</a></li> -->
    <li><a class="lista" href="#galeria">Galería</a></li>
    <!-- <li><a class="lista" href="./views/productos.html">Productos</a></li> -->
    <li><a class="lista" href="#productos">Productos</a></li>
    <!-- <li><a class="lista" href="./views/quienes-somos.html">Quienes Somos</a></li> -->
    <li><a class="lista" href="#quienes-somos">Quienes Somos</a></li>
    <li><a class="lista contacto" href="./views/contacto.html">Contacto</a></li>
    <!-- <li><a class="lista" href="#quienes-somos">Contacto</a></li> -->
    <li class="sub_menu">
      <a class="linkNav Login lista" href="#">Login</a>
      <!-- menu desplegable -->
      <div class="sub_menu_aux">
        <div class="punto">
          <!-- <div class="sub_menu_aux_2"> -->
          <ul class="dropdown-content">
            <li class="listaItem">
              <a class="lista" href="./views/iniciar-sesion.html">Iniciar sesión</a>
            </li>
            <li class="listaItem">
              <a class="lista" href="./views/register.html">Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</nav>`


if (verificarExistenciaId('idHeader')){
    document.getElementById("idHeader").innerHTML=headerIndex;
} 



let footer = `
<div class="footer">
      <div class="col-1">
        <strong>Mas sobre nosotros</strong>
        <p>politicas de privacidad</p>
        <p>terminos de uso</p>
        <p>soporte tecnico de la web</p>
      </div>

      <div class="col-2">
        <strong>Redes sociales</strong>
        <div class="lista-iconos">
          <span class="social-1"></span>
          <span class="social-2"></span>
          <!-- <span class="social-3"></span> -->
          <span class="social-4"></span>
          <!-- <span class="social-5"></span> --> 
        </div>
      </div>
      <div class="col-3">
        <strong>descarga nuestras app</strong>
        <img src="./img/download_app.png" alt="">
        <img src="./img/google_play.png" alt="">
      </div>
    </div>`


    if (verificarExistenciaId('idFooter')){
        document.getElementById("idFooter").innerHTML=footer;
    } 

    let headerSecciones = ` 
     <div class="btn_menu icon-menu"></div>
    <nav class="menu">
      <!-- Logo -->
      <div id="logo">
        <a href="../index.html#">
          <!-- <i class="fa-solid fa-futbol"></i> -->

          <span class="logo-text">CAMPEONES DEL MUNDO</span>
          <div class="icon_logo_container">
            <img src="../img/Golden-Sta.png" class="icon_logo" alt="imagen de 3 Estrellas">
            <img src="../img/Golden-Sta.png" class="logo_logo_reflejo" alt="imagen de 3 Estrellas">
          </div>
        </a>
      </div>
      <!-- hipervínculos del menú -->
      <ul class="listaNav">
        <li><a class="lista" href="../index.html#">Inicio</a></li>
        <li><a class="lista" href="../index.html#galeria">Galería</a></li>
        <li><a class="lista" href="../index.html#productos">Productos</a></li>
        <li><a class="lista" href="../index.html#quienes-somos">Quienes Somos</a></li>
        <li><a class="lista contacto" href="../views/contacto.html">Contacto</a></li>
        <li class="sub_menu">
          <a class="linkNav Login lista" href="#">Login</a>
          <!-- menu desplegable -->
          <div class="sub_menu_aux">
            <div class="punto">
              <!-- <div class="sub_menu_aux_2"> -->
              <ul class="dropdown-content">
                <li class="listaItem">
                  <a class="lista" href="../views/iniciar-sesion.html">Iniciar sesión</a>
                </li>
                <li class="listaItem">
                  <a class="lista" href="../views/register.html">Registrarse</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>`


    if (verificarExistenciaId('idHeaderSecciones')){
        document.getElementById("idHeaderSecciones").innerHTML = headerSecciones;
    } 



    let footerSecciones = `
<div class="footer">
      <div class="col-1">
        <strong>Mas sobre nosotros</strong>
        <p>politicas de privacidad</p>
        <p>terminos de uso</p>
        <p>soporte tecnico de la web</p>
      </div>

      <div class="col-2">
        <strong>Redes sociales</strong>
        <div class="lista-iconos">
          <span class="social-1"></span>
          <span class="social-2"></span>
          <!-- <span class="social-3"></span> -->
          <span class="social-4"></span>
          <!-- <span class="social-5"></span> --> 
        </div>
      </div>
      <div class="col-3">
        <strong>descarga nuestras app</strong>
        <img src="../img/download_app.png" alt="">
        <img src="../img/google_play.png" alt="">
      </div>
    </div>`

    if (verificarExistenciaId('idFooterSecciones')){
      document.getElementById("idFooterSecciones").innerHTML = footerSecciones;
  } 

    function verificarExistenciaId(id) {
        // Intenta seleccionar el elemento por su ID
        const elemento = document.getElementById(id);
    
        // Si el elemento es null, significa que no existe ningún elemento con ese ID
        if (elemento === null) {
            console.log(`El elemento con el ID '${id}' no existe.`);
            return false;
        } else {
            console.log(`El elemento con el ID '${id}' existe.`);
            return true;
        }
    }
    
   