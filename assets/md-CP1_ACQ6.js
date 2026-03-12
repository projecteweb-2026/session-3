import{_ as d}from"./Explain-Bm44VBK1.js";import{_ as m}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Ds5V5ujI.js";import{_ as u}from"./Concept-Bc57QgIn.js";import{o as f,b as g,w as o,g as n,d as a,D as s,m as _,v as b,x as k,z as l}from"./modules/vue-D1nHpGkv.js";import{I as h}from"./slidev/default-D6M4EsH6.js";import{u as v,f as x}from"./slidev/context-C8v26GMK.js";import"./index-CAuo_Q7D.js";import"./modules/shiki-BxQeHSSz.js";import"./modules/unplugin-icons-DsqAMxeG.js";const R={__name:"slides-session3.md__slidev_38",setup(y){const{$clicksContext:i,$frontmatter:r}=v();return i.setup(),(w,e)=>{const t=u,p=m,c=d;return f(),g(h,b(k(l(x)(l(r),37))),{default:o(()=>[e[2]||(e[2]=n("h2",null,[n("strong",null,"docker-compose")],-1)),a(t,{term:"docker-compose",explanation:"A tool for defining and running <strong>multi-container</strong> applications. You describe all services in a YAML file, then start everything with one command: <code>docker-compose up</code>."}),e[3]||(e[3]=s(" lets you define multi-container apps in a single file:",-1)),a(p,_({},{title:"",ranges:[]}),{default:o(()=>[...e[0]||(e[0]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"# docker-compose.yml")]),s(`
`),n("span",{class:"line"},[n("span",null,"version: '3'")]),s(`
`),n("span",{class:"line"},[n("span",null,"services:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  web:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    build: .")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ports:")]),s(`
`),n("span",{class:"line"},[n("span",null,'      - "8000:8000"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    environment:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      - DATABASE_URL=postgres://db:5432/mydb")]),s(`
`),n("span",{class:"line"},[n("span",null,"    depends_on:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      - db")]),s(`
`),n("span",{class:"line"},[n("span",null,"  db:")]),s(`
`),n("span",{class:"line"},[n("span",null,"    image: postgres:15")]),s(`
`),n("span",{class:"line"},[n("span",null,"    environment:")]),s(`
`),n("span",{class:"line"},[n("span",null,"      - POSTGRES_DB=mydb")])])],-1)])]),_:1},16),a(t,{term:"depends_on",explanation:"Tells Docker to start services in the right order. In this example, the <code>db</code> service starts before <code>web</code>. Note: it only waits for the container to <strong>start</strong>, not for the database to be <strong>ready</strong>."}),a(c,{label:"How does environment relate to 12-Factor?"},{default:o(()=>[...e[1]||(e[1]=[s(" This is Factor III (Config) in practice. Database URLs, API keys, and secrets are passed as ",-1),n("strong",null,"environment variables",-1),s(", not hardcoded in the code. ",-1)])]),_:1})]),_:1},16)}}};export{R as default};
