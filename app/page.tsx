'use client';
import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { SiteFooter } from '@/components/SiteFooter';
import { BackToTop } from '@/components/BackToTop';
import { VEYAGO_URL } from '@/components/VeyagoCredit';
const chapters=[['opening','Introduction'],['pillars','Three pillars'],['expertise','Advisory & Delivery'],['approach','The 4D approach'],['intelligence-lab','Intelligence Lab'],['profile','Tanja Drefke'],['conversation','Contact']];
const chapterNumber=(index:number)=>index>0?String(index).padStart(2,'0'):'';
const pillars=[
 {number:'I',title:'Advisory &',subtitle:'Transformation',purpose:'Set the direction.',body:'Strategy, AI governance, enterprise transformation and interim executive advisory for organizations navigating complex technology and regulatory requirements.',scope:'Strategy · Governance · Transformation',link:'#practice-0',cta:'Explore advisory'},
 {number:'II',title:'Delivery &',subtitle:'Engineering',purpose:'Make it work.',body:'Implementation across SAP, cloud and digital products, supported by test management and automation. For suitable development projects, TDC works with independent development partner Veyago.',scope:'SAP & Cloud · Quality · Digital products',link:'#practice-3',cta:'Explore delivery'},
 {number:'III',title:'Intelligence',subtitle:'Lab',purpose:'Develop what comes next.',body:'Developing a digital health platform that brings personal health information, observations and goals into context. Research explores how AI can make changes and relationships easier to understand.',scope:'Applied AI · Digital health · Research',link:'#intelligence-lab',cta:'Explore the lab'}
];
const practices=[
 ['AI Governance','& Regulatory Readiness','Accountability by design.','Connect AI strategy to governance, risk ownership and operational controls. Make regulatory readiness an executable part of the operating model.','AI lifecycle governance / Risk & controls / Human oversight'],
 ['Strategic &','Digital Advisory','A direction people can act on.','Bring independent perspective to technology and investment decisions. Translate strategic priorities into credible roadmaps and clear decision ownership.','Digital & AI strategy / Due diligence / Portfolio governance'],
 ['Enterprise','Transformation','One program. Many dependencies.','Lead change across business functions, technology teams and geographies. Align the operating model, program governance and people needed to deliver it.','Operating model design / Program & PMO leadership / Change & adoption'],
 ['Digital Transformation','Services','From architecture to implementation.','Deliver across SAP S/4HANA, cloud platforms and enterprise integrations. Coordinate technical dependencies, migration and rollout against a credible delivery plan.','SAP S/4HANA / Cloud & integration / Rollout readiness'],
 ['Test Management','& Automation','Confidence should be evidenced.','Build a test approach that connects business risk to coverage, ownership and reliable execution. Establish the foundations for sustainable automation.','Corporate test strategy / SIT & UAT / Automation roadmaps'],
 ['Digital Product','Engineering','A working product with an agreed scope.','Websites, web applications and first usable versions of digital products. You receive a working website or application with the agreed core functions, ready for use or testing with initial users.','Agreed core functions / Usable release']
];
const method=[
 ['01','Discover','What is actually blocking progress?',
  'I check the plan against the reality: system readiness, unresolved decisions and the people who can enable or block change. Together, we identify which gaps matter most and who needs to resolve them.',
  'A prioritized risk and readiness assessment, with stakeholders and decision gaps mapped.'],
 ['02','Design','Who does what, in which order?',
  'I turn the findings into a delivery plan: dependencies, decision owners and acceptance criteria. We work through legacy constraints and regulatory requirements before fixing the sequence, so the roadmap reflects what the organization can actually deliver.',
  'An agreed roadmap with responsibilities, dependencies and risk mitigation actions.'],
 ['03','Deliver','What proves we are ready to go live?',
  'I coordinate delivery against agreed checkpoints, escalate blockers and check the evidence behind reported progress. Testing and cutover rehearsals show what works, what remains open and which risks need a decision before go-live.',
  'Test results, a rehearsed cutover plan and an explicit view of remaining go-live risks.'],
 ['04','Drive','Can your team run it without me?',
  'Before handover, I establish who owns the service, decisions and ongoing improvement. I work with those owners on the routines, knowledge and measures they need to manage change after go-live.',
  'Named operational owners, a knowledge transfer plan and agreed measures for ongoing performance.']
];
const cases=[
 {sector:'Industrial manufacturing',name:'Enterprise quality in a complex SAP transformation.',scope:'Test strategy · Automation · Governance',brief:'A corporate S/4HANA transformation involving business functions, technology teams and external delivery partners.',role:'Test management and automation leadership, connecting business requirements to test scope, technical prerequisites and acceptance evidence.',focus:'Clarifying what is ready, what is blocked and which decisions are required before automation can provide dependable assurance.'},
 {sector:'Regulated enterprise',name:'Connecting AI ambition with accountable governance.',scope:'AI governance · Security · Operating model',brief:'A multi-jurisdiction environment with overlapping technology, security and regulatory requirements.',role:'Structuring governance requirements into a coherent operating model, with responsibility and control implementation made explicit.',focus:'Making governance usable in everyday decisions, with a clearer connection between obligations, operational controls and evidence.'},
 {sector:'Global infrastructure',name:'Bringing a distributed technology estate together.',scope:'Hybrid cloud · Network transformation · International delivery',brief:'A globally distributed infrastructure estate undergoing cloud consolidation and network modernisation.',role:'Coordinating international delivery, dependencies and stakeholders across locations and technology workstreams.',focus:'A coordinated transition toward a common technology environment while managing operational continuity and local requirements.'}
];
const withVeyagoLink=(text:string)=>text.split('Veyago').flatMap((part,i)=>i===0?[part]:[<a key={i} className="inline-link" href={VEYAGO_URL} target="_blank" rel="noreferrer">Veyago</a>,part]);
export default function Home(){
 const root=useRef<HTMLDivElement>(null); const [chapter,setChapter]=useState('opening'); const [practice,setPractice]=useState(0); const [phase,setPhase]=useState(0); const [motionPaused,setMotionPaused]=useState(false);
 useEffect(()=>{
  const el=root.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;let observer:IntersectionObserver;const animations:Animation[]=[];
  const paint=()=>{frame=0;el.dataset.motion=reduced.matches?'off':'on';const vh=innerHeight;let current='opening';el.querySelectorAll<HTMLElement>('[data-chapter]').forEach(s=>{if(s.getBoundingClientRect().top<vh*.48)current=s.id});if(scrollY>0 && scrollY+vh>=document.documentElement.scrollHeight-2)current=chapters[chapters.length-1][0];setChapter(current);
   el.querySelectorAll<HTMLElement>('.chapter-heading').forEach(heading=>{
    const entrance=Math.min(1,Math.max(0,(vh*.88-heading.getBoundingClientRect().top)/(vh*.58)));
    heading.style.setProperty('--heading-scale',String(reduced.matches?1:.82+.18*entrance));
   });
   const panels=Array.from(el.querySelectorAll<HTMLElement>('.expertise-panel'));let pi=0;panels.forEach((s,i)=>{if(s.getBoundingClientRect().top<vh*.55)pi=i});setPractice(pi);
   const progress=Math.min(1,Math.max(0,scrollY/(document.documentElement.scrollHeight-vh||1)));el.style.setProperty('--journey',String(progress));
   if(reduced.matches){el.style.setProperty('--hero-shift','0px');el.style.setProperty('--title-shift','0px');el.style.setProperty('--title-scale','1');el.style.setProperty('--rail-x','0px');return}
   const opening=el.querySelector<HTMLElement>('#opening')!;const p=Math.max(0,Math.min(1,-opening.getBoundingClientRect().top/(vh*.85)));el.style.setProperty('--hero-shift',`${p*48}px`);el.style.setProperty('--title-shift',`${-p*30}px`);el.style.setProperty('--title-scale',String(1-p*.035));
   const journey=el.querySelector<HTMLElement>('.method-journey')!;
   if(innerWidth>900 && innerHeight>880){
    const distance=Math.max(1,journey.offsetHeight-vh);
    const mp=Math.min(1,Math.max(0,-journey.getBoundingClientRect().top/distance));
    setPhase(Math.min(3,Math.floor(mp*4)));
    el.style.setProperty('--method-progress',String(mp));
   }

  };
  const request=()=>{if(!frame)frame=requestAnimationFrame(paint)};
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){if(!reduced.matches){const a=(entry.target as HTMLElement).animate([{opacity:.25,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:800,easing:'cubic-bezier(.2,.65,.3,1)',fill:'none'});animations.push(a)}observer.unobserve(entry.target)}}),{threshold:.12});el.querySelectorAll('[data-reveal]').forEach(n=>observer.observe(n));
  const stage=el.querySelector<HTMLElement>('.method-stage')!;
  let visualVisible=false;
  const syncVisibility=()=>{stage.dataset.animating=String(visualVisible && !document.hidden)};
  const visualObserver=new IntersectionObserver(([entry])=>{visualVisible=entry.isIntersecting;syncVisibility()},{threshold:.25});
  visualObserver.observe(el.querySelector('.method-visual')!);
  document.addEventListener('visibilitychange',syncVisibility);
  const practiceMenu=el.querySelector<HTMLElement>('.expertise-intro')!;
  const fitPracticeMenu=()=>{practiceMenu.dataset.stickyFit=String(practiceMenu.offsetHeight<=innerHeight-118)};
  const menuObserver=new ResizeObserver(fitPracticeMenu);menuObserver.observe(practiceMenu);
  addEventListener('resize',fitPracticeMenu);fitPracticeMenu();
  const changed=()=>{animations.forEach(a=>a.cancel());request()};addEventListener('scroll',request,{passive:true});addEventListener('resize',request);reduced.addEventListener('change',changed);paint();return()=>{removeEventListener('scroll',request);removeEventListener('resize',request);reduced.removeEventListener('change',changed);observer.disconnect();visualObserver.disconnect();menuObserver.disconnect();removeEventListener('resize',fitPracticeMenu);document.removeEventListener('visibilitychange',syncVisibility);animations.forEach(a=>a.cancel());cancelAnimationFrame(frame)}
 },[]);
 const selectPhase=(index:number)=>{
  const journey=root.current?.querySelector<HTMLElement>('.method-journey');
  if(journey && innerWidth>900 && innerHeight>880 && !matchMedia('(prefers-reduced-motion: reduce)').matches){
   window.scrollTo({top:scrollY+journey.getBoundingClientRect().top+(journey.offsetHeight-innerHeight)*((index+.15)/4),behavior:'smooth'});
  }else setPhase(index);
 };
 return <div className="tdc" ref={root} data-active-chapter={chapter}>
 <a href="#main" className="skip">Skip to content</a>
 <header className="site-header"><a href="#opening" className="brand" aria-label="TDC Digital Advisory home"><span>TDC</span><small>DIGITAL ADVISORY</small></a><nav aria-label="Main navigation"><a href="#pillars">Three pillars</a><a href="#expertise">Expertise</a><a href="#approach">Approach</a><a href="#profile">Tanja Drefke</a></nav><a className="header-contact" href="#conversation">Let’s talk <span aria-hidden="true">↗</span></a></header>
 <nav className="chapter-banner" aria-label="Current section" data-visible={chapter!=='opening'} aria-hidden={chapter==='opening'}><a href={'#'+chapter} tabIndex={chapter==='opening'?-1:0} aria-current="location"><span className="banner-number">{chapterNumber(chapters.findIndex(([id])=>id===chapter))}</span><span className="banner-title">{chapters.find(([id])=>id===chapter)?.[1]}</span><span className="banner-total">/ {String(chapters.length-1).padStart(2,'0')}</span><span className="banner-brand">TDC DIGITAL ADVISORY</span></a></nav>
 <nav className="chapter-nav" aria-label="Page chapters">{chapters.map(([id,label],i)=><a href={'#'+id} key={id} aria-label={`${chapterNumber(i)} ${label}`.trim()} aria-current={chapter===id?'location':undefined}><span className="chapter-tip">{label}</span><i/><span className="chapter-index">{chapterNumber(i)}</span></a>)}</nav>
 <main id="main">
 <section id="opening" data-chapter className="opening"><div className="opening-sticky"><div className="hero-text"><p className="eyebrow">Independent perspective. Executive commitment.</p><h1><span>Transformation</span><span>needs <em>clarity.</em></span><span>Delivery needs</span><span><em>leadership.</em></span></h1><p className="hero-description">Enterprise advisory, accountable delivery<br className="desktop-break"/> and independent applied intelligence.</p><div className="hero-ctas"><a className="button" href="#expertise">Explore Expertise <span aria-hidden="true">↗</span></a><a className="underlined" href="#conversation">Start a Conversation</a></div></div><figure className="hero-photo"><img src="/tanja-drefke.webp" width="1122" height="1402" alt="Tanja Drefke, Transformation Advisor and Executive Delivery Lead" fetchPriority="high"/><figcaption><span>Tanja Drefke</span><small>Transformation Advisor<br/>& Executive Delivery Lead</small></figcaption></figure><div className="hero-bottom"><span>International boutique advisory</span><a href="#pillars">Scroll to explore <span aria-hidden="true">↓</span></a><span>A clear perspective</span></div></div></section>
 <section id="pillars" data-chapter className="pillars section">
  <div className="section-mark"><span>01 / Three pillars</span><span>The structure of TDC</span></div>
  <div className="pillars-heading"><div className="chapter-heading"><h2>Advisory. Delivery.<br/><em>Applied intelligence.</em></h2></div><p>Three distinct pillars.<br/>Connected by one senior-led practice.</p></div>
  <div className="pillars-grid">{pillars.map(p=><article className="pillar" key={p.number} data-reveal><div className="pillar-index"><span>PILLAR {p.number}</span><span aria-hidden="true">↗</span></div><h3>{p.title}<br/>{p.subtitle}</h3><p className="pillar-purpose">{p.purpose}</p><p className="pillar-description">{withVeyagoLink(p.body)}</p><p className="pillar-scope">{p.scope}</p><a className="underlined" href={p.link}>{p.cta}<span aria-hidden="true">↗</span></a></article>)}</div>
  <div className="pillars-connection"><span>How they connect</span><p>Advisory sets direction. Delivery turns it into operating reality. The Lab develops the applied intelligence that informs both.</p></div>
 </section>
 <section id="expertise" data-chapter className="expertise section"><header className="expertise-header"><div><span className="eyebrow">02 / Practices · Pillars I & II</span><div className="chapter-heading"><h2>Clear direction.<br/><em>Accountable delivery.</em></h2></div></div><p>Six focused practices across<br/>advisory and execution.</p></header><div className="expertise-layout"><aside className="expertise-intro"><p className="practice-menu-title">Explore our practices</p><nav aria-label="Expertise areas">{practices.map((p,i)=><div key={p[0]} className="practice-nav-item">{(i===0||i===3)&&<span className="practice-group">{i===0?'I / Advisory & Transformation':'II / Delivery & Engineering'}</span>}<a href={'#practice-'+i} aria-current={practice===i?'location':undefined}><span>0{i+1}</span><span className="practice-link-title">{p[0]} {p[1]}</span><span className="expertise-arrow" aria-hidden="true">↗</span></a></div>)}</nav></aside><div className="expertise-panels">{practices.map(([title,subtitle,line,text,outputs],i)=><article id={'practice-'+i} className="expertise-panel" key={title}><div data-reveal><p className="practice-pillar">{i<3?'Pillar I / Advisory & Transformation':'Pillar II / Delivery & Engineering'}</p><span className="panel-number">0{i+1}<small>/ 06</small></span><h3>{title}<br/><em>{subtitle}</em></h3><h4>{line}</h4><p>{text}</p>{i===1&&<div className="practice-extension"><h4>Interim &amp; Executive Advisory</h4><p>Embedded senior leadership for transformation programs, regulatory milestones and executive capability gaps. Board and C-level advisory connects strategic priorities with independent assurance and accountable execution.</p></div>}{i===5&&<div className="development-partner"><p>On suitable projects, TDC works with <strong><a className="inline-link" href={VEYAGO_URL} target="_blank" rel="noreferrer">Veyago</a></strong>, an independent development partner.</p><dl><div><dt>TDC</dt><dd>Advisory, requirements clarification and agreed project coordination.</dd></div><div><dt>Veyago</dt><dd>Technical development of the website or application.</dd></div></dl></div>}<div className="outputs">{outputs.split(' / ').map(t=><span key={t}>{t}</span>)}</div><a className="underlined" href={'mailto:tanja@tdc-advisory.com?subject='+encodeURIComponent(title+' '+subtitle+' enquiry')}>{i===5?'Discuss your development project':'Discuss your challenge'} <span aria-hidden="true">↗</span></a></div></article>)}</div></div></section>
 <section id="approach" data-chapter className="method-journey"><div className="method-sticky">
  <div className="method-heading"><div><span className="eyebrow">03 / The 4D approach</span><div className="chapter-heading"><h2>How I lead<br/><em>transformation.</em></h2></div></div><p>My practical method: establish the facts, agree the plan, verify readiness and transfer ownership.</p></div>
  <div className="phase-navigation" aria-label="Explore the four phases">{method.map(([n,title],i)=><button key={n} aria-pressed={phase===i} aria-controls="phase-details" onClick={()=>selectPhase(i)}><span className="phase-dot">{phase>i?'✓':n}</span><span>{title}</span><span className="phase-direction" aria-hidden="true">↗</span></button>)}</div>
  <div className="method-stage" data-phase={phase} data-paused={motionPaused}>
   <div className="method-visual" aria-hidden="true">
    <div className="visual-caption"><span>{['FIND THE GAPS THAT BLOCK PROGRESS','AGREE THE SEQUENCE AND OWNERS','CHECK READINESS AT EACH MILESTONE','PUT YOUR TEAM IN CONTROL'][phase]}</span><span>0{phase+1} / 04</span></div>
    <svg viewBox="0 0 620 330" fill="none" className="process-art">
     <defs><pattern id="process-grid" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#a8a492" opacity=".45"/></pattern></defs>
     <rect width="620" height="330" fill="url(#process-grid)"/>
     <g className="process-scene scene-discover" data-visible={phase===0}>
      <circle cx="317" cy="160" r="112" className="radar-ring"/><circle cx="317" cy="160" r="40" className="discovery-scan animated-mark"/><circle cx="317" cy="160" r="75" className="radar-ring"/>
      {[[65,95],[110,236],[176,52],[186,172],[266,102],[285,236],[359,63],[419,116],[435,253],[538,67],[549,211]].map(([x,y],i)=><g key={i}><path d={`M${x} ${y} L317 160`} className="discovery-link"/><path d={`M${x} ${y} L317 160`} pathLength="1" className="signal-stream animated-mark" style={{animationDelay:`${i*.43}s`}}/><circle cx={x} cy={y} r={i%3===0?6:4} className="discovery-point" style={{transitionDelay:`${i*35}ms`}}/></g>)}
      <circle cx="317" cy="160" r="31" className="core-circle"/><path d="M304 160h26m-13-13v26" stroke="#f9f7f2" strokeWidth="1.5"/>
      <text x="317" y="313" textAnchor="middle">Check systems, decisions and stakeholder readiness.</text>
     </g>
     <g className="process-scene scene-design" data-visible={phase===1}>
      <path d="M110 160H230M270 160H380M420 160H514M250 160V74H400V160M250 160V246H400V160" className="design-path"/><path d="M110 160H230M270 160H380M420 160H514M250 160V74H400V160M250 160V246H400V160" pathLength="1" className="design-trace animated-mark"/>
      <rect x="209" y="119" width="82" height="82" rx="3" className="structure-block"/><rect x="209" y="119" width="82" height="82" rx="3" className="design-emphasis animated-mark"/><rect x="368" y="128" width="64" height="64" rx="3" className="structure-block"/><rect x="368" y="128" width="64" height="64" rx="3" className="design-emphasis animated-mark" style={{animationDelay:"1.5s"}}/>
      <circle cx="110" cy="160" r="12" className="core-circle"/><circle cx="514" cy="160" r="12" className="core-circle"/>
      <circle cx="250" cy="74" r="5" className="gold-dot"/><circle cx="400" cy="74" r="5" className="gold-dot"/><circle cx="250" cy="246" r="5" className="gold-dot"/><circle cx="400" cy="246" r="5" className="gold-dot"/>
      <text x="250" y="165" textAnchor="middle" className="diagram-label">PLAN</text><text x="400" y="165" textAnchor="middle" className="diagram-label">OWN</text>
      <text x="317" y="313" textAnchor="middle">Connect each step to its dependencies and owner.</text>
     </g>
     <g className="process-scene scene-deliver" data-visible={phase===2}>
      <path d="M62 234H183Q203 234 203 214V170Q203 150 223 150H354Q374 150 374 130V93Q374 73 394 73H551" className="delivery-base"/>
      <path d="M62 234H183Q203 234 203 214V170Q203 150 223 150H354Q374 150 374 130V93Q374 73 394 73H551" className="delivery-path" pathLength="1"/><path d="M62 234H183Q203 234 203 214V170Q203 150 223 150H354Q374 150 374 130V93Q374 73 394 73H551" className="delivery-stream animated-mark" pathLength="1"/>
      {[[88,234],[281,150],[491,73]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="22" className="milestone-halo animated-mark" style={{animationDelay:`${[.3,2.1,4.1][i]}s`}}/><circle cx={x} cy={y} r="15" className="core-circle"/><path d={`M${x-6} ${y}l4 4 8-8`} stroke="#f9f7f2" strokeWidth="1.5"/><text x={x} y={y+42} textAnchor="middle" className="diagram-label">{['BUILD','TEST','REHEARSE'][i]}</text></g>)}
      <path d="m541 64 10 9-10 9" stroke="#927a50" strokeWidth="2"/>
      <text x="317" y="313" textAnchor="middle">Use test and rehearsal results to assess readiness.</text>
     </g>
     <g className="process-scene scene-drive" data-visible={phase===3}>
      <circle cx="310" cy="156" r="98" className="cycle-base"/><g className="cycle-orbit animated-mark"><circle cx="310" cy="58" r="7" className="cycle-traveller"/><path d="M310 58a98 98 0 0 0-57 18" className="cycle-tail"/><circle cx="310" cy="254" r="4" className="cycle-traveller-secondary"/></g><path d="M310 58a98 98 0 0 1 98 98M310 254a98 98 0 0 1-98-98" className="cycle-path"/><path d="m399 145 9 11 9-11M203 167l9-11 9 11" className="cycle-path"/>
      <circle cx="310" cy="156" r="57" className="structure-block"/><text x="310" y="151" textAnchor="middle" className="diagram-label">YOUR TEAM</text><text x="310" y="169" textAnchor="middle" className="diagram-label">OWNS IT</text>
      {[[310,58],[408,156],[310,254],[212,156]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="5" className="gold-dot"/>)}
      <text x="310" y="33" textAnchor="middle" className="diagram-label">HAND OVER</text><text x="468" y="161" textAnchor="middle" className="diagram-label">OPERATE</text><text x="153" y="161" textAnchor="middle" className="diagram-label">IMPROVE</text>
      <text x="317" y="313" textAnchor="middle">Agree who runs, measures and improves the service.</text>
     </g>
    </svg>
    <div className="visual-baseline"><span>{['ASSUMPTIONS','PRIORITIES','MILESTONES','GO-LIVE'][phase]}</span><span className="baseline-line"/><span>{['VERIFIED GAPS','AGREED ROADMAP','READINESS EVIDENCE','CLIENT OWNERSHIP'][phase]}</span></div>
   </div>
   <div id="phase-details" className="phase-details">{method.map(([n,title,headline,text,outcome],i)=><article key={n} data-active={phase===i}>
    <div className="phase-label"><span>PHASE {n}</span><span>4D / TDC DIGITAL ADVISORY</span></div><h3>{title}<span>.</span></h3><h4>{headline}</h4><p>{text}</p><div className="outcome"><small>What you get</small><span>{outcome} <b aria-hidden="true">↗</b></span></div>
   </article>)}</div>
  </div>
  <div className="method-footer"><span>Applied to your program’s risks and stage.</span><button className="motion-toggle" aria-pressed={motionPaused} onClick={()=>setMotionPaused(v=>!v)}><span aria-hidden="true">{motionPaused?"▷":"Ⅱ"}</span> {motionPaused?"Resume animation":"Pause animation"}</button><span>Scroll to explore, or select a phase ↑</span></div>
 </div></section>
 <section id="intelligence-lab" data-chapter className="lab section">
  <div className="section-mark"><span>04 / Pillar III · Intelligence Lab</span><span>Independent applied research</span></div>
  <div className="lab-layout"><div className="lab-copy"><span className="lab-status"><i aria-hidden="true"/>Platform in development</span><div className="chapter-heading"><h2>Making sense of<br/><em>complex health data.</em></h2></div><p className="lab-lead">TDC is developing a digital health platform to help individuals bring their health information, everyday observations and personal goals into one structured view.</p><p>Health information becomes more useful when it can be considered in context and over time. The Lab explores how AI can help people recognize relationships, understand changes and identify questions worth exploring further.</p><p>The planned workflow combines a structured intake with written or spoken input and tracking over time. The development challenge is to connect these inputs and explain the resulting observations in a way the individual can understand.</p><a className="underlined" href="mailto:tanja@tdc-advisory.com?subject=Digital%20health%20platform%20enquiry">Discuss the platform <span aria-hidden="true">↗</span></a></div>
   <div className="lab-research"><p className="lab-journey-label">Planned user journey</p><ol className="lab-journey"><li><span className="lab-step" aria-hidden="true">01</span><div><h3>Build a personal picture</h3><p>Set goals and capture health information through structured questions, notes or voice.</p></div></li><li><span className="lab-step" aria-hidden="true">02</span><div><h3>Follow change over time</h3><p>Connect observations across time and explore possible relationships in the data.</p></div></li><li><span className="lab-step" aria-hidden="true">03</span><div><h3>Make the information understandable</h3><p>Present observations in context, so people can see what changed and what may need further attention.</p></div></li></ol>
    <dl><div><dt>For whom</dt><dd>Individuals seeking a clearer view of their health information</dd></div><div><dt>Research</dt><dd>Structured data, analysis over time & applied AI</dd></div><div><dt>Status</dt><dd>Independent research & platform development</dd></div></dl>
   </div></div>
 </section>
 <section id="profile" data-chapter className="profile section"><figure className="profile-photo" data-reveal><img src="/tanja-drefke.webp" width="1122" height="1402" alt="Tanja Drefke" loading="lazy"/><figcaption>Tanja Drefke / Founder & Principal</figcaption></figure><div className="profile-copy"><span className="eyebrow">05 / A personal commitment</span><div className="chapter-heading"><h2>Independent in thought.<br/><em>Invested in the outcome.</em></h2></div><p className="profile-lead">I connect the strategic picture with the reality of delivery. The value lies in making both work together.</p><p>I work with leaders facing consequential technology and transformation decisions. My role is to structure complexity, make risks visible and create the conditions for credible execution.</p><p>TDC connects three distinct pillars: Advisory & Transformation, Delivery & Engineering, and the Intelligence Lab. The Lab is our independent applied-research program in human-centered digital health and personal intelligence.</p><div className="profile-facts"><span>International enterprise experience</span><span>German & English</span><span>Direct, senior involvement</span></div><a href="https://linkedin.com/in/tanjadrefke" target="_blank" rel="noreferrer" className="underlined">Connect with Tanja <span aria-hidden="true">↗</span></a></div><aside id="experience" className="experience-summary" aria-labelledby="experience-title"><div className="experience-summary-heading"><h3 id="experience-title">Selected experience</h3><span>Project details on selection</span></div><div className="experience-summary-grid">{cases.map((project,i)=><Dialog key={project.name}><DialogTrigger asChild><button className="experience-summary-card"><span>{project.sector}</span><strong>{['SAP transformation & test leadership','AI governance & operating models','International cloud & infrastructure delivery'][i]}</strong><span className="experience-summary-link">View project <b aria-hidden="true">↗</b></span></button></DialogTrigger><DialogContent className="project-dialog"><span className="eyebrow">Selected experience / {project.sector}</span><DialogTitle className="project-dialog-title">{project.name}</DialogTitle><DialogDescription className="project-dialog-description">{project.scope}</DialogDescription><div className="dialog-body"><h3>The setting</h3><p>{project.brief}</p><h3>The responsibility</h3><p>{project.role}</p><h3>The focus</h3><p>{project.focus}</p></div><a className="button" href="mailto:tanja@tdc-advisory.com?subject=Reference%20portfolio">Request the reference portfolio <span aria-hidden="true">↗</span></a></DialogContent></Dialog>)}</div><p className="experience-summary-note">Named references available on request.</p></aside></section>
 <section id="conversation" data-chapter className="conversation section"><div className="chapter-heading"><h2>Contact</h2></div><div className="conversation-bottom"><p>Bring the challenge.<br/>Let’s establish what matters—and where to begin.</p><a href="mailto:tanja@tdc-advisory.com" className="email">tanja@tdc-advisory.com <span aria-hidden="true">↗</span></a></div></section>
 </main><SiteFooter showEmail={false}/>
 <BackToTop/>
 </div>
}
