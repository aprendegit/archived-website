/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else{factory(jQuery)}}(function($){var pluses=/\+/g;function decode(s){if(config.raw){return s}
try{return decodeURIComponent(s.replace(pluses,' '))}catch(e){}}
function decodeAndParse(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\')}
s=decode(s);try{return config.json?JSON.parse(s):s}catch(e){}}
var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}
value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=decodeAndParse(cookie);break}
if(!key&&(cookie=decodeAndParse(cookie))!==undefined){result[name]=cookie}}
return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend({},options,{expires:-1}));return!0}
return!1}}));var cdp_cookie={_id_cookie:'cdp-cookies-plugin-wp',ya_existe_cookie:function _ya_existe_cookie(){if(jQuery.cookie(cdp_cookie._id_cookie)!=null)
return jQuery.cookie(cdp_cookie._id_cookie)=='cdp';return!1},poner_cookie:function _poner_cookie(){return jQuery.cookie(cdp_cookie._id_cookie,'cdp',{expires:365,path:'/'})},eliminar:function _eliminar(){return jQuery.removeCookie(cdp_cookie._id_cookie)},iniciar:function _iniciar(){jQuery('.cdp-cookies-solapa').click(function(){cdp_cookie.mostrar_aviso()});jQuery('.cdp-cookies-boton-cerrar').click(function(){cdp_cookie.poner_cookie();cdp_cookie.ocultar_aviso()})},mostrar_aviso:function _mostrar_aviso(de_golpe){if(de_golpe){jQuery('.cdp-cookies-texto').attr('class','cdp-cookies-texto cdp-mostrar');jQuery('.cdp-cookies-solapa').attr('class','cdp-cookies-solapa cdp-ocultar')}else{jQuery('.cdp-cookies-texto').attr('class','cdp-cookies-texto cdp-animacion-arriba');jQuery('.cdp-cookies-solapa').attr('class','cdp-cookies-solapa cdp-animacion-abajo')}},ocultar_aviso:function _ocultar_aviso(de_golpe){if(de_golpe){jQuery('.cdp-cookies-texto').attr('class','cdp-cookies-texto cdp-ocultar');jQuery('.cdp-cookies-solapa').attr('class','cdp-cookies-solapa cdp-mostrar')}else{jQuery('.cdp-cookies-texto').attr('class','cdp-cookies-texto cdp-animacion-abajo');jQuery('.cdp-cookies-solapa').attr('class','cdp-cookies-solapa cdp-animacion-arriba')}},comportamiento:function _comportamiento(){return cdp_cookies_info.comportamiento}};jQuery(document).ready(function($){cdp_cookie.iniciar();if(cdp_cookie.ya_existe_cookie())
cdp_cookie.ocultar_aviso(!0);else cdp_cookie.mostrar_aviso(!0)})
;