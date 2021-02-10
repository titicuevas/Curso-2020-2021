

        var productosArray = [];

        function Producto(nombre, precio, stock) {
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }

        function toggleElement(id){
            x = document.getElementById(id);
            
            if(x.style.display == 'none'){
                x.style.display = 'block';
            } else {
                x.style.display = 'none';
            }
        }

        function showAdministrador(){
            // <button disabled="disabled">Añadir</button>
            //     <button>Volver</button>

            var btn1 = document.createElement('button'); // Creamos en memoria un boton
            btn1.textContent = 'Añadir'; // Añadimos el nombre del boton
            btn1.onclick = anadir;
            btn1.disabled = true;
            btn1.id = 'anadirBtn';
            var btn2 = document.createElement('button'); // Creamos en memoria un boton
            btn2.textContent = 'Volver'; // Añadimos el nombre del boton
            var ctn2 = document.getElementById('contenedorDos');

            var btnEntrar = document.getElementById('entrarBtn');
            
            var btnEntrar = document.getElementById('adminBtn');
            btnEntrar.disabled = true;

            ctn2.appendChild(btn1);
            ctn2.appendChild(btn2);

            toggleElement('contenedorDos')
        }

        function anadir(){
            var nombre = document.getElementById('nombre');
            var precio = document.getElementById('precio');
            var stock = document.getElementById('stock');

            var productos = document.getElementById('productos');

            var prod = new Producto(nombre.value, precio.value, stock.value);            

            productosArray.push(prod);
            
            var linea = document.createElement('span');

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.onclick = seleccion;
            checkbox.value = productosArray.length - 1;

            var br = document.createElement('br');
            linea.textContent = nombre.value+' '+precio.value+' '+stock.value;
            productos.appendChild(linea);
            productos.appendChild(checkbox);
            productos.appendChild(br);
            
            // console.log(productosArray);

            nombre.value = '';
            precio.value = '';
            stock.value = '';
        }

        function seleccion(){
            elems = document.querySelectorAll("input[type=checkbox]:checked");
            var comprarBtn = document.getElementById('comprarBtn');

            if(elems.length){
                comprarBtn.disabled = false;
            } else {
                comprarBtn.disabled = true;
            }
        }

        function comprar(){
            elems = document.querySelectorAll("input[type=checkbox]:checked");

            var total = 0;

            elems.forEach(element => {
                productosArray[element.value].stock -= 1;
                total += parseFloat(productosArray[element.value].precio);
                document.cookie = productosArray[element.value].nombre+"="+productosArray[element.value].precio;
            });

            alert("A pagar "+total+" leuros");

            console.log(document.cookie);
        }

        function validar(){
            var nombre = document.getElementById('nombre');
            var precio = document.getElementById('precio');
            var stock = document.getElementById('stock');

            var anadirBtn = document.getElementById('anadirBtn');

            if(nombre.value && precio.value && stock.value){
                precioVal = parseFloat(precio.value);

                if(!isNaN(precioVal)){
                    // precioVal es numero decimal

                    stockVal = parseInt(stock.value);

                    if(!isNaN(stockVal)){
                        // stock es un numero entero

                        anadirBtn.disabled = false;
                    } else {
                        anadirBtn.disabled = true;
                    }
                } else {
                    anadirBtn.disabled = true;
                }
            } else {
                anadirBtn.disabled = true;
            }      
        }

