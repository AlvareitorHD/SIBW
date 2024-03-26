***********************************************************************
** Álvaro Ruiz Luzón *************************  SIBW  *****************
***********************************************************************
***********   Práctica 1: HTML y CSS   ********************************
***********************************************************************

Ficheros HTML:

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
 
Ficheros CSS:

		- estilo_por: hoja de estilos para la portada.
		- estilo_act: hoja de estilos para cada actividad.
		- estilo_imp: hoja de estilos casi igual que estilo_act pero
						  con muchas cosas desactivadas (como la cabecera y
						  espacio auxiliar) y cambios en la tipografía para
						  una mejor impresión a papel.
