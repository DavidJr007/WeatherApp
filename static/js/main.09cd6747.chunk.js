(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),i=s(3),r=s.n(i),h=(s(13),s(4)),u=s(5),l=s(7),o=s(6),d=(s(14),s(15),function(e){return Object(a.jsxs)("form",{className:"weather-form",onSubmit:e.submit,children:[Object(a.jsx)("input",{type:"text",className:"wheather-form__input",placeholder:"Write city",value:e.value,onChange:e.change}),Object(a.jsx)("button",{className:"weather-form__btn",children:Object(a.jsx)("i",{className:"fas fa-search"})})]})}),m=(s(16),function(e){var t=e.weather,s=t.err,n=t.city,c=t.temp,i=t.sunrise,r=t.sunset,h=t.humidity,u=t.wind,l=t.date,o=t.sky,d=t.skyicon,m=null;if(!s&&n){var j=new Date(1e3*i).toLocaleTimeString(),p=new Date(1e3*r).toLocaleTimeString();m=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h2",{className:"weather-result__title",children:["Actual weather in ",n]}),Object(a.jsxs)("main",{className:"data",children:[Object(a.jsxs)("div",{className:"wheather-result__weather",children:[Object(a.jsxs)("div",{className:"wheather-result__temp",children:[c.toFixed()," \xb0C"]}),Object(a.jsxs)("div",{className:"wheather-result__sky",children:[Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(d,"@2x.png"),alt:"weather-icon",className:"wheather-result__icon"}),Object(a.jsx)("p",{className:"weather-result__sky-description",children:o})]})]}),Object(a.jsxs)("div",{className:"wheather-result__humidity",children:["Humidity: ",h,"%"]}),Object(a.jsxs)("div",{className:"wheather-result__wind",children:["Wind speed: ",(3.6*u).toFixed()," km/h"]}),Object(a.jsxs)("div",{className:"weather-result__sun",children:[Object(a.jsxs)("div",{className:"sun-rise",children:[Object(a.jsx)("img",{src:"./pictures/sunrise.png",alt:"",className:"sun-rise__picture"}),j]}),Object(a.jsxs)("div",{className:"sun-down",children:[p,Object(a.jsx)("img",{src:"./pictures/sunset.png",alt:"",className:"sun-set__picture"})]})]})]}),Object(a.jsx)("div",{className:"wheather-result__actualization",children:l})]})}return Object(a.jsx)("div",{className:"wheather-result",children:s?"There is no city named ".concat(n):m})}),j="2c05a0306a2568967046aa8d9eb7438a",p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",humidity:"",wind:"",sky:"",skyicon:"",err:!1},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleCitySubmit=function(t){t.preventDefault();var s="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&units=metric&appid=").concat(j);fetch(s).then((function(e){if(e.ok)return e;throw Error("Coudn't found this city")})).then((function(e){return e.json()})).then((function(t){var s=(new Date).toLocaleString();e.setState((function(e){return{date:s,city:e.value,sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp,humidity:t.main.humidity,wind:t.wind.speed,sky:t.weather[0].description,skyicon:t.weather[0].icon,err:!1}}))})).catch((function(t){console.log(t),e.setState((function(e){return{err:!0,city:e.value}}))}))},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wheather-app",children:[Object(a.jsx)("h1",{className:"wheather-app__title",children:"Wheather App"}),Object(a.jsx)(d,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),Object(a.jsx)(m,{weather:this.state})]})}}]),s}(c.a.Component),w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),w()}],[[17,1,2]]]);
//# sourceMappingURL=main.09cd6747.chunk.js.map