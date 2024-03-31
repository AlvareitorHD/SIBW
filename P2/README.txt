***********************************************************************
** Álvaro Ruiz Luzón *************************  SIBW  *****************
***********************************************************************
***********   Práctica 2: JavaScript y Bootstrap   ********************
***********************************************************************

Ficheros HTML y CSS de la Práctica 1:

 - portada: página principal de las actividades de montaña. El
            contenedor de actividades puede tener cualquier
            número de actividades.
            * Sólo tienen contenido las 2 primeras actividades:
            beas y huetor.*
 
 - actividad: no hay una actividad específica, sino dos:

 		- actividad_beas
 		- actividad_huetor
 				
 				*cada actividad tiene su titulo, fecha, precio,
 				imágenes a la derecha, descripción, RRSS y la
 				posibilidad de imprimir. Si se pulsa el Logo
 				de la página web, se redirige a portada.html.

 - actividad_imprimir: dos html para las dos actividades
 					   anteriores:
 								
 		- actividad_imprimir_beas
 		- actividad_imprimir_huetor
 		
 			 *cada actividad a imprimir tiene el mismo
 			 contenido que la página de actividad pero
 			 con un estilo diferente y adecuado para
 			 imprimir la actividad.
 
		- estilo_por: hoja de estilos para la portada.
		- estilo_act: hoja de estilos para cada actividad.
		- estilo_imp: hoja de estilos casi igual que estilo_act pero
						  con muchas cosas desactivadas (como la cabecera y
						  espacio auxiliar) y cambios en la tipografía para
						  una mejor impresión a papel.

Mejoras Práctica 2:

 - En esta práctica he intentado aplicar contenedores responsive y más dinámicos con Bootstrap, además
 de haber mejorado un par de cosas de la práctica anterior (como una tipografía nueva, cabecera mejorada, botón imprimir y márgenes).

 - Comentarios:
	Como nueva funcionalidad se ha implementado la sección de Comentarios en cada actividad, que se despliega mediante el botón
	"Comentarios". Al abrir esta sección ya hay dos comentarios predefinidos.

	Cada comentario tiene foto de usuario, nombre, hora y fecha del comentario como cabecera de éste. También tiene su reseña (texto breve
	sobre la experiencia de la actividad o similar).
 	
	· Formulario de comentario: el usuario puede añadir un comentario suyo nuevo. Para ello deberá dar su nombre, email y reseña.
	Si estos campos son válidos, se añadirá su comentario, por el contrario no se añadirá y se avisará con su correspodientes avisos.

	* También hay un pequeño mecanismo de censura de palabras prohibidas (como insultos u otras palabras no permitidas), que sustituye
	dicha palabra por la primera letra y asteriscos (por ej: prado -> p**** ).