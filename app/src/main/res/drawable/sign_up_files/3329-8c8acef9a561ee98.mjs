"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3329,24274],{603387:(s,e,a)=>{a.d(e,{Fe:()=>t,bO:()=>i,eQ:()=>r,s4:()=>n});let t={BUSINESS_HIERARCHY_CHILD:"BUSINESS_HIERARCHY_CHILD",BUSINESS_HIERARCHY_MEMBER:"BUSINESS_HIERARCHY_MEMBER"},r={business_relationship_invite:"business_relationship"},n={PARTNER_REQUEST:"PARTNER_REQUEST",MEMBER_INVITE:"MEMBER_INVITE",PARTNER_INVITE:"PARTNER_INVITE",ORGANIZATION_MANAGER_INVITE:"ORGANIZATION_MANAGER_INVITE"},i=s=>0===s?"DIRECT_PERMISSION":"AGGREGATED_PERMISSION"},250304:(s,e,a)=>{a.d(e,{EF:()=>E,Hg:()=>h,Hl:()=>p,IR:()=>A,Je:()=>d,K3:()=>P,O1:()=>G,Q6:()=>l,QE:()=>t,V3:()=>T,Z4:()=>b,c7:()=>N,cU:()=>i,cg:()=>r,dZ:()=>n,gO:()=>S,j$:()=>I,j9:()=>v,pg:()=>Z,pk:()=>y,pt:()=>O,qq:()=>$,sy:()=>u,tP:()=>R,uE:()=>m,vk:()=>x,w2:()=>c,we:()=>D,ww:()=>C,xX:()=>_,yR:()=>o});let t=3e3,r=280,n=500,i=1e4,_=250,c=_+1,d=50,u=50,E=20,o=20,l={DASHBOARD:"DASHBOARD",PEOPLE:"PEOPLE",PARTNERS:"PARTNERS",AD_ACCOUNTS:"AD_ACCOUNTS",AD_ACCOUNTS_PENDING_TAB:"AD_ACCOUNTS_PENDING_TAB",HISTORY:"HISTORY",PEOPLE_DETAIL:"PEOPLE_DETAIL",PARTNERS_DETAIL:"PARTNERS_DETAIL",SHARED_PARTNERS_DETAIL:"SHARED_PARTNERS_DETAIL",AD_ACCOUNTS_DETAIL:"AD_ACCOUNTS_DETAIL",PENDING_AD_ACCOUNTS_DETAIL:"PENDING_AD_ACCOUNTS_DETAIL",PEOPLE_INVITES:"PEOPLE_INVITES",PARTNERS_INVITES:"PARTNERS_INVITES",CHOOSER:"CHOOSER",PARTNERS_REQUEST_PAGE:"PARTNERS_REQUEST_PAGE",PARTNERS_INVITE_PAGE:"PARTNERS_INVITE_PAGE",PROFILES:"PROFILES",PROFILES_DETAIL:"PROFILES_DETAIL",PARTNERS_PENDING_TAB:"PARTNERS_PENDING_TAB",PEOPLE_PENDING_TAB:"PEOPLE_PENDING_TAB",USERS:"USERS",ACOUNTS:"ACCOUNTS",BUSINESS_SECURITY:"BUSINESS_SECURITY",SUPPORT_TOOL:"SUPPORT_TOOL",ASSETS:"ASSETS",ASSET_GROUPS:"ASSET_GROUPS",INVOICE_MANAGEMENT:"INVOICE_MANAGEMENT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",BUSINESS_HIERARCHY_BUSINESS_SECURITY:"BUSINESS_HIERARCHY_BUSINESS_SECURITY",MANAGERS:"MANAGERS",AUDIENCES:"AUDIENCES",SHARED_TAGS:"SHARED_TAGS",CATALOGS:"CATALOGS",BRAND_SAFETY:"BRAND_SAFETY"},m={PARTNER:"PARTNER",PARTNER_ADMIN:"PARTNER_ADMIN"},b={ADVERTISER_OWNED_AD_ACCOUNT:"ADVERTISER_OWNED_AD_ACCOUNT",AGENCY_OWNED_AD_ACCOUNT:"AGENCY_OWNED_AD_ACCOUNT"},A={ASCENDING:"ASCENDING",DESCENDING:"DESCENDING"},N={AD_ACCOUNT:"AD_ACCOUNT",PERSON:"PERSON",PARTNER:"PARTNER"},p={PERSON:"PERSON",PARTNER:"PARTNER",PROFILE:"PROFILE"},S={ADMIN:"ADMIN",ANALYST:"ANALYST",FINANCE_MANAGER:"FINANCE_MANAGER",AUDIENCE_MANAGER:"AUDIENCE_MANAGER",CAMPAIGN_MANAGER:"CAMPAIGN_MANAGER",CATALOGS_MANAGER:"CATALOGS_MANAGER"},I=["ADMIN","ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],y=["CATALOGS_MANAGER","CATALOGS_VIEWER"],T={EMPLOYEE:"EMPLOYEE",BIZ_ADMIN:"BIZ_ADMIN",OWNER:"OWNER"},h=["PROFILE_PUBLISHER"],R={AD_ACCOUNT:0,PROFILE:2,ASSET_GROUP:3},C={0:"AD_ACCOUNT",2:"PROFILE",3:"ASSET_GROUP"},D={id:"0",is_pin_support_user:!0,biz_roles:[T.BIZ_ADMIN],business_roles:[T.BIZ_ADMIN],user:{username:"psupport",full_name:"Pinterest support",image_small_url:"https://i.pinimg.com/60x60_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",image_medium_url:"https://i.pinimg.com/150x150_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg"}},O={ACTIVE:0,PENDING:1},P={ACTIVE:"active",PENDING:"pending"},v="filter_type",x={page:1,totalCount:0,limit:10,sortDirection:"ASCENDING",sortBy:void 0,searchBy:void 0,searchTerm:""},$={WARNING:"WARNING",DEFAULT:"DEFAULT"},G={BUSINESS_INVITE_INVALID:2932,BUSINESS_ACCESS_PERSONAL_ACCOUNT:2936,INVALID_USERNAME:90,ACCESS_DENIED:280,BUSINESS_RELATIONSHIP_ALREADY_EXISTS:2751,ODO_BUSINESS_RELATIONSHIP_ALREADY_EXISTS:53,BUSINESS_RELATIONSHIP_COUNT_EXCEEDED:2769,BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:2938,ODO_BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:66,ODO_BIZ_INVITE_EXISTS:71,INVALID_ODO_REQUEST:2755,BUSINESS_INVITE_STACKED_ERROR:2773,ACL_POLICY_NOT_FOUND:1110,BUSINESS_INVITE_NOT_EXIST:2770},Z={ALL_TAGS:"ALL",OWNED:"OWNED",SHARED:"SHARED"}},443943:(s,e,a)=>{a.d(e,{$2:()=>_,Ah:()=>d,IW:()=>i,Vs:()=>u,dF:()=>E,sl:()=>c});var t=a(250304),r=a(728241),n=a(23234);let i=(s={},e={})=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit,t=s.page||e.page;return(t-1)*a}return e.startIndex||0},_=(s={},e)=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit,t=s.page||e.page;return(t-1)*a}return e.startIndex},c=(s,e,a,t)=>{let{businessId:r,...n}=a,{...i}=t;return{id:s,...i,...n,searchBy:n.searchBy,searchTerm:n.searchTerm||i.searchTerm,limit:n.limit||i.limit,page:n.page||i.page,sortBy:n.sortBy||i.sortBy,sortDirection:n.sortDirection||i.sortDirection,startIndex:e,...0===e&&{page:1}}},d=(s,e)=>e.reduce((e,a)=>({ids:e.ids.concat(s(a)),data:{...e.data,[s(a)]:a}}),{ids:[],data:{}}),u=(s,e)=>{let a={page:s.page??e.page,limit:s.limit??e.limit,sortBy:s.sortBy??e.sortBy,searchBy:s.searchBy,searchTerm:s.searchTerm??e.searchTerm,sortDirection:s.sortDirection??e.sortDirection},t=i(s,e);return{...a,startIndex:t,...0===t&&{page:1}}},E=async(s,e,a,i)=>{let _="PEOPLE"===a?n.JC:r.Eg,{data:{data:c=[],total_data_count:d}={}}=i?await i({limit:t.xX,startIndex:0})||{}:await _({...s,limit:t.xX,startIndex:0,id:s?.id||""}),u=Math.ceil(d/t.xX);if(u<=1)return{data:{data:c,total_data_count:d}};let E=[...Array(u).keys()].slice(1),o=await Promise.allSettled(E.map(e=>i?i({limit:t.xX,startIndex:e*t.xX}):_({...s,limit:t.xX,startIndex:e*t.xX,id:s?.id||""}))),l=o.reduce((s,e)=>(e.value?.data?.data&&(s=s.concat(e.value.data.data)),s),c);return{data:{data:l,total_data_count:d}}}},529271:(s,e,a)=>{a.d(e,{ib:()=>m,XV:()=>N,jC:()=>A,oC:()=>l,W3:()=>S,fc:()=>v,Ns:()=>U,cE:()=>h,xZ:()=>p,lo:()=>x,N1:()=>O,BG:()=>P,eo:()=>C,pI:()=>T,cp:()=>R,G2:()=>D,Oi:()=>Z,cR:()=>I,GS:()=>G,JE:()=>$,EB:()=>o,l_:()=>L});var t=a(453880),r=a(948659),n=a(250304),i=a(107366),_=a(728241),c=a(23234);let d=async(s,e,a,t=[])=>{let r=await (0,i.Z)({url:s,method:"GET",data:e}),n={bookmark:void 0,data:{business_id:"",data:[]},...r.resource_response};if(!n.bookmark){let s=a(n.data);return s.push(...t),n.data}return await d(s,{...e,bookmark:n.bookmark},a,t.concat(...a(n.data)))},u={get:(s,e={})=>d(s,e,s=>s.data,[])};var E=a(193888);let o=async(s,e,a,t,r,n,i,d)=>"PARTNER"===n?await (0,_.SZ)({businessId:r,partnerId:s,assetId:t,roles:e,clientBusinessId:i,businessHierarchyNodeId:d}):await (0,c.Jg)({businessId:r,memberId:s,assetId:t,roles:e,permissions:a,businessHierarchyNodeId:d}),l=async(s,e,a,t)=>{if(0===e.length)return;let r=[];e.forEach(({assigneeIds:e,adAccountIds:n,roles:i})=>{0!==i.length&&e.forEach(e=>{n.forEach(n=>{r.push(o(e,i,i,n,s,a,void 0,t))})})}),await Promise.all(r)},m=async(s,e,a,t,r)=>{let n="PEOPLE"===t?"MEMBER_INVITE":"PARTNER_INVITE",_=e.reduce((s,e)=>{let a=Object.keys(e)[0],t=Object.values(e)[0],r=t.includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{}),c=a.map(e=>(0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(_),invite_type:n,business_hierarchy_node_id:r}}));await Promise.all(c)},b=s=>s.reduce((s,e)=>{let a=Object.keys(e)[0],t=Object.values(e)[0],r=t.includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{}),A=async(s,e,a,r)=>{let{anyEnabled:n}=t.Z()?.experimentsClient.checkExperiment("business_access_invites_api_v4_migration")??{},_=b(a);if(n){let a=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:_}});return a.resource_response.data}let c=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(_),business_hierarchy_node_id:r}});return c.resource_response.data},N=async(s,e,a,t)=>{let r=e.reduce((s,e)=>{let a=Object.keys(e)[0],t=Object.values(e)[0],r=t.includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{}),n=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${a}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(r),invite_type:"PARTNER_REQUEST",business_hierarchy_node_id:t}});return n.resource_response},p=async s=>{let{anyEnabled:e}=t.Z()?.experimentsClient.checkExperiment("ads_international_reseller_client_onboarding")??{};return(e&&s?await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET",data:{business_id:s}}):await (0,i.Z)({url:"ads/v4/advertisers/countries/",method:"GET"})).resource_response.data},S=async(s,e,a,t,n,_)=>{let c=await (0,i.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:s,name:t,country:n,business_hierarchy_node_id:a,tos_id:_||(0,E.Fc)(r.tN[n]),...e&&{agency_user_id:e}}});return c.resource_response.data},I=async()=>{let{anyEnabled:s}=t.Z()?.experimentsClient.checkExperiment("business_access_employees_api_v4_migration")??{};if(s){let s=await (0,i.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),e=s.resource_response.data?.data;return await Promise.all(e||[])}let e=await u.get("ads/internal/business_access/users/me/employers/"),a=e.data;return await Promise.all(a||[])},y=async({businessId:s,assetId:e,limit:a,sortBy:r="name",searchBy:_="name",searchTerm:c,startIndex:d,sortDirection:u,resourceType:E,permissions:o})=>{let{anyEnabled:l}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{},m={};e&&(m={...m,child_asset_id:e}),o&&(m={...m,permissions:o}),m&&0===Object.keys(m).length&&(m=void 0);let b=l?n.xX:n.cU,A=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${s}/assets/`,data:{page_size:a&&a<b?a:b,sort_by:r,search_by:_,start_index:d,search_value:c,sort_ascending:"ASCENDING"===u,resource_type:E,filters:m?JSON.stringify(m):void 0}});return A.resource_response},T=async({businessId:s,assetIds:e,resourceType:a,limit:r,sortBy:_,sortDirection:c="ASCENDING",searchBy:d,searchTerm:u="",startIndex:E=0,filtersPayload:o})=>{let{anyEnabled:l}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{},{anyEnabled:m}=t.Z()?.experimentsClient.checkExperiment("business_access_invites_api_v4_migration")??{},b=l||m?n.xX:n.cU,A=r||Math.min(b,e.length||1),N=o&&Object.keys(o).length>0?{filters:JSON.stringify(o)}:{};return(await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{asset_ids:e,resource_type:a,page_size:A,sort_by:_,sort_direction:c,search_by:d,search_value:u,start_index:E,...N}})).resource_response},h=async({id:s,limit:e,sortBy:a="name",searchBy:r="name",searchTerm:n="",startIndex:_=0,sortDirection:c="ASCENDING",forPartner:d=!1,includeAssetSummary:u=!1})=>{let{anyEnabled:E}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(E){let t=await y({id:s,businessId:s,limit:e,sortBy:a,searchBy:r,searchTerm:n,startIndex:_,sortDirection:c,resourceType:"AD_ACCOUNT",permissions:d?["OWNER"]:void 0});if(!u)return t;{let a=await T({businessId:s,assetIds:t?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"AD_ACCOUNT"}),r=t?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{...t,data:{...t?.data,data:r}}}}{let t=await (0,i.Z)({url:`/ads/internal/business_access/businesses/${String(s)}/all_assets/`,data:{limit:e,sort_by:a,sort_ascending:"ASCENDING"===c,search_by:r,search_value:n,start_index:_,for_partner:d}});return t.resource_response}},R=async({id:s,limit:e,sortBy:a="name",sortDirection:r="ASCENDING",searchBy:_="name",searchTerm:c="",startIndex:d=0,forPartner:u})=>{let{anyEnabled:E}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(E)return y({id:s,businessId:s,limit:e,sortBy:a,searchBy:_,searchTerm:c,startIndex:d,sortDirection:r,resourceType:"PROFILE"});{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/all_assets/`,data:{limit:e,sort_by:a,sort_ascending:"ASCENDING"===r,search_by:_,search_value:c,start_index:d,for_partner:u,type:n.tP.PROFILE}});return t.resource_response}},C=async({id:s,assetIds:e,limit:a,type:r})=>{let{anyEnabled:_}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(_)return await T({businessId:s,resourceType:n.ww[r],assetIds:e});let c=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/batch_assets/`,method:"GET",data:{limit:a,type:r,assets_ids:e.join(",")}});return c.resource_response},D=async({businessId:s,assetId:e,resourceType:a="AD_ACCOUNT",includeAssetSummary:r=!1})=>{let{anyEnabled:n}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(n){let t=await y({id:s,businessId:s,searchBy:"id",searchTerm:e,assetId:e,resourceType:a});if(r){let e=await T({businessId:s,assetIds:t?.data.data.map(s=>s.asset_id)||[],limit:1,resourceType:"AD_ACCOUNT"}),a=t?.data.data.map(s=>({...s,...e?.data.data[s.asset_id]})),r={...t,data:{...t?.data,data:a?.[0]}};return r}{let s={...t,data:{...t?.data,data:t?.data?.data[0]}};return s}}let _=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/`,method:"GET"});return _.resource_response},O=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:_,searchTerm:c,startIndex:d,sortDirection:u})=>{let{anyEnabled:E}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(E){let t=a&&a<n.xX?a:n.xX,E=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:t,sort_by:r,search_by:_||"FULL_NAME",start_index:d,search_value:c,sort_ascending:"ASCENDING"===u}});return E.resource_response}{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/partners/`,data:{limit:a,sort_by:r,search_by:_||"full_name",start_index:d,search_value:c,sort_ascending:"ASCENDING"===u}}),n=t.resource_response;return n}},P=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:_,searchTerm:c,startIndex:d,sortDirection:u})=>{let{anyEnabled:E}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(E){let t=a&&a<n.xX?a:n.xX,E=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,data:{page_size:t,sort_by:r,search_by:_||"FULL_NAME",start_index:d,search_value:c,sort_ascending:"ASCENDING"===u}});return E.resource_response}{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/assets/${e}/members/`,data:{limit:a,sort_by:r,search_by:_||"full_name",start_index:d,search_value:c,sort_ascending:"ASCENDING"===u}}),n=t.resource_response;return n}},v=async({id:s,businessId:e,assetId:a,limit:t,sortBy:r="name",searchBy:n="name",searchTerm:i,startIndex:_,sortDirection:c,resourceType:d="ASSET_GROUP"})=>y({id:s,businessId:e,assetId:a,limit:t,sortBy:r,searchBy:n,searchTerm:i,startIndex:_,sortDirection:c,resourceType:d}),x=async({id:s,businessId:e,limit:a,sortBy:t="name",searchBy:r="name",searchTerm:n,startIndex:i,sortDirection:_,resourceType:c="ASSET_GROUP"})=>y({id:s,businessId:e,limit:a,sortBy:t,searchBy:r,searchTerm:n,startIndex:i,sortDirection:_,resourceType:c}),$=async(s,e)=>{let a=await (0,i.Z)({url:`ads/v4/businesses/${s.businessId}/advertisers/metrics`,method:"POST",data:e});return a.resource_response.data},G=async(s,e)=>{let a=await (0,i.Z)({url:`ads/v4/business_hierarchy/${s.businessHierarchyId}/advertisers/metrics`,method:"POST",data:e});return a.resource_response.data},Z=async(s,e,a=!1)=>{let t=await (0,i.Z)({url:`ads/v4/advertisers/${s}/terms_of_service/`,method:"GET",data:{tos_type:e,include_html:a}}),r=t.resource_response.data;return{id:r.id,html:r.html,hasAccepted:r.has_accepted,advertiserId:r.advertiser_id}},U=async s=>{let e=await (0,i.Z)({url:`ads/v4/advertisers/${s}/advertiser_settings`,method:"GET",data:{}});return e.resource_response.data},L=async({advertiser_id:s,default_utm_source_enabled:e})=>{let a=await (0,i.Z)({url:`ads/v4/advertisers/${s??""}/advertiser_settings`,method:"POST",data:{advertiser_id:s,default_utm_source_enabled:e}});return a.resource_response.data}},728241:(s,e,a)=>{a.d(e,{Bq:()=>I,Cj:()=>l,Eg:()=>A,F0:()=>b,FA:()=>_,Jq:()=>o,K7:()=>m,M9:()=>y,OA:()=>R,Of:()=>S,SB:()=>p,SZ:()=>h,Zk:()=>E,c4:()=>N,ek:()=>d,h9:()=>T,qC:()=>c,w8:()=>u,wi:()=>C});var t=a(453880),r=a(250304),n=a(107366),i=a(443943);let _=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/batch_partners/`,method:"GET",data:{partners:e,assets_summary:a}}),{data:{data:r}}={data:{},...t.resource_response};return r},c=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/shared/batch_partners/`,method:"GET",data:{partners:e,assets_summary:a}}),{data:{data:r}}={data:{},...t.resource_response};return r},d=async(s,e)=>{let{anyEnabled:a}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(a){let a=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.xX}});return{data:[],business_id:"",partner_id:"",...a.resource_response.data}}let i=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.cU}});return{data:[],business_id:"",partner_id:"",...i.resource_response.data}},u=async(s,e)=>{let a=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/asset_counts/`,method:"GET"});return a.resource_response.data},E=async({partnerId:s,role:e,businessId:a,businessHierarchyNodeId:r})=>{let{anyEnabled:i}=t.Z()?.experimentsClient.checkExperiment("business_access_invites_api_v4_migration")??{};if(i){let e=await (0,n.Z)({url:`ads/v4/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_INVITE",business_hierarchy_node_id:r}});return e.resource_response}{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{role_name:e,business_hierarchy_node_id:r}});return t.resource_response}},o=async({partnerId:s,role:e,businessId:a})=>{let{anyEnabled:r}=t.Z()?.experimentsClient.checkExperiment("business_access_invites_api_v4_migration")??{};if(r){let e=await (0,n.Z)({url:`ads/v4/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_REQUEST"}});return e.resource_response}{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${a}/partners/${s}/invite/`,method:"POST",data:{role_name:e,type:"PARTNER_REQUEST"}});return t.resource_response}},l=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:t})=>{let r=await (0,n.Z)({url:`/ads/internal/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:t,business_hierarchy_node_id:a}});return r.resource_response},m=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:t,partner_type:r})=>{let i=await (0,n.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:t,partner_type:r,business_hierarchy_node_id:a}});return i.resource_response},b=async({id:s,limit:e,sortBy:a="full_name",searchBy:t="full_name",searchTerm:r="",startIndex:i=0,sortDirection:_="ASCENDING",includeAssetSummary:c=!0})=>{let d=await (0,n.Z)({url:`/ads/internal/business_access/businesses/${s}/all_partners/`,method:"GET",data:{limit:e,sort_by:a,search_by:t,start_index:i,search_value:r,assets_summary:c?"true":"false",sort_ascending:"ASCENDING"===_}}),u={data:{data:[]},...d.resource_response};return u.data.data=u.data.data.map(e=>(e?.created_by_biz?.id===s&&(e.isAgencyPartner=!0),e)),u},A=async({id:s,limit:e,sortBy:a="full_name",searchBy:t=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:i="",startIndex:_=0,sortDirection:c="ASCENDING",includeAssetSummary:d,partnerType:u,partners:E=[]})=>{let o=e&&e<r.xX?e:r.xX,l=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/`,data:{page_size:o,sort_by:a,search_by:t,start_index:_,search_value:i,assets_summary:d?"true":"false",sort_ascending:"ASCENDING"===c,partner_type:u,partner_ids:E}});return l.resource_response},N=async({businessId:s,partnerId:e,includeAssetSummary:a=!0})=>{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/`,method:"GET",data:{assets_summary:a?"true":"false "}});if(t.resource_response.data?.created_by_biz?.id===s){let s={data:{isAgencyPartner:void 0},...t.resource_response};return s.data.isAgencyPartner=!0,s}return t.resource_response},p=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:_="name",searchTerm:c,startIndex:d,sortDirection:u})=>{let{anyEnabled:E}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(E){let t=a&&a<r.xX?a:r.xX,E=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:t,sort_by:i,...c&&{search_by:_},start_index:d,search_value:c,sort_ascending:"ASCENDING"===u,partner_type:"INTERNAL"}});return E.resource_response}let o=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:a,sort_by:i,...c&&{search_by:_},start_index:d,search_value:c,sort_ascending:"ASCENDING"===u}});return o.resource_response},S=async({businessId:s,partnerId:e,limit:a,sortBy:i,searchBy:_="name",searchTerm:c,startIndex:d,sortDirection:u})=>{let{anyEnabled:E}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(E){let t=a&&a<r.xX?a:r.xX,E=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:t,sort_by:i,...c&&{search_by:_},start_index:d,search_value:c,sort_ascending:"ASCENDING"===u,partner_type:"EXTERNAL"}});return E.resource_response}let o=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/shared/${e}/assets/`,method:"GET",data:{limit:a,sort_by:i,...c&&{search_by:_},start_index:d,search_value:c,sort_ascending:"ASCENDING"===u}});return o.resource_response},I=async({businessId:s,partnerId:e,limit:a,sortBy:t,searchBy:i="name",searchTerm:_,startIndex:c,sortDirection:d})=>{let u=a&&a<r.xX?a:r.xX,E=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:u,sort_by:t,..._?{search_by:i}:{},start_index:c,search_value:_,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}});return E.resource_response},y=async(s,e,a=!1)=>{let _=await (0,i.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER"),c=_.data.data,d=await Promise.all(c.map(async({id:e})=>{let{anyEnabled:i}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(i){let t=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.xX,resource_type:r.ww[a?r.tP.PROFILE:r.tP.AD_ACCOUNT],partner_type:"INTERNAL"}});return t.resource_response.data}let _=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.cU,type:a?r.tP.PROFILE:r.tP.AD_ACCOUNT}});return _.resource_response.data}));return c.map((s,e)=>({...s,assets:d[e].data}))},T=async({businessId:s,partnerId:e,assetId:a})=>{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/`,method:"GET"});return t.resource_response},h=async({businessId:s,partnerId:e,assetId:a,roles:r,clientBusinessId:i,businessHierarchyNodeId:_})=>{let{anyEnabled:c}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(c){let t=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:r.includes("ADMIN")?["ADMIN"]:r,business_hierarchy_node_id:_,...i?{client_business_id:i}:{}}});return t.resource_response.data}{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{finalRoles:r.includes("ADMIN")?["ADMIN"]:r,business_hierarchy_node_id:_,...i?{client_business_id:i}:{}}});return t.resource_response.data}},R=async({businessId:s,partnerId:e,assetId:a,businessHierarchyNodeId:r,partner_type:i="INTERNAL"})=>{let{anyEnabled:_}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(_){let t=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:r}});return t.resource_response.data}{let t=await (0,n.Z)({url:`ads/internal/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:i,business_hierarchy_node_id:r}});return t.resource_response.data}},C=async({businessId:s,assetId:e,limit:a,sortBy:t,searchBy:i="FULL_NAME",searchTerm:_,startIndex:c,sortDirection:d})=>{let u=a&&a<r.xX?a:r.xX,E=await (0,n.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:u,sort_by:t,search_by:i,search_value:_,start_index:c,sort_ascending:"ASCENDING"===d}});return E.resource_response}},23234:(s,e,a)=>{a.d(e,{GL:()=>S,JC:()=>l,Jg:()=>I,QC:()=>A,UQ:()=>u,bP:()=>y,dx:()=>E,kF:()=>T,kH:()=>m,kJ:()=>c,kY:()=>b,mZ:()=>N,n5:()=>p,p6:()=>o,p_:()=>d});var t=a(453880),r=a(603387),n=a(250304),i=a(107366),_=a(529271);let c=async({businessId:s,requestIds:e,includeAssetSummary:a})=>{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/batch_members/`,method:"GET",data:{members:e,assets_summary:a,extend_info_from_user_api:!0}}),{data:{data:r}}={data:{data:{}},...t.resource_response};return r},d=async(s,e,a,r)=>{let{anyEnabled:n}=t.Z()?.experimentsClient.checkExperiment("business_access_invites_api_v4_migration")??{};if(n){let t=await (0,i.Z)({url:`/ads/v4/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{business_role:e,members:s}});return{data:[],...t.resource_response.data}}let _=await (0,i.Z)({url:`ads/internal/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{role_name:e,members:s,business_hierarchy_node_id:r}});return{data:[],..._.resource_response.data}},u=async(s,e,a)=>{let{anyEnabled:_}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{},c=_?await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:n.xX,...0===a||1===a?{asset_permission_type:(0,r.bO)(a)}:{}}}):await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:n.cU,...Number.isInteger(a)&&{asset_permission_type:a}}}),d={data:[],...c.resource_response.data};return d.data},E=async(s,e,a,r)=>{let{anyEnabled:n}=t.Z()?.experimentsClient.checkExperiment("business_access_employees_api_v4_migration")??{},_=await (0,i.Z)({url:`ads/${n?"v4":"internal"}/business_access/businesses/${s}/members/${e}/`,method:"DELETE",data:{...n?{business_role:a}:{role_name:[a]},business_hierarchy_node_id:r}});return{data:void 0,auxData:void 0,..._.resource_response.data}},o=async(s,e,a,r)=>{let n=t.Z()?.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled??!1,_=await (0,i.Z)({url:n?`ads/v4/business_access/businesses/${a}/members/${e}/`:`ads/internal/business_access/businesses/${a}/members/${e}/`,method:"PUT",data:{...n?{business_role:s}:{role_name:s},...r?{business_hierarchy_node_id:r}:{}}});return _.resource_response.data},l=async({id:s,limit:e,filters:a,memberIds:t=[],sortBy:r="FULL_NAME",searchBy:_=["FULL_NAME","EMAIL","USERNAME"],searchTerm:c="",startIndex:d=0,sortDirection:u="ASCENDING",includeAssetSummary:E})=>{let o=e&&e<n.xX?e:n.xX,l=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/`,data:{page_size:o,member_ids:t.length?t.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:r,search_by:_,start_index:d,search_value:c,assets_summary:E?"true":"false",sort_ascending:"ASCENDING"===u,extend_info_from_user_api:!0}});return l.resource_response},m=async({id:s,limit:e,filters:a,sortBy:r="full_name",searchBy:_="full_name",searchTerm:c="",startIndex:d=0,sortDirection:u="ASCENDING",includeAssetSummary:E})=>{let{anyEnabled:o}=t.Z()?.experimentsClient.checkExperiment("business_access_employees_api_v4_migration_part1")??{};if(o){let t=Array.isArray(_)?_:[_],i=["FULL_NAME","USERNAME","BUSINESS_ID","EMAIL"].filter(s=>t.map(s=>s.toUpperCase().trim()).includes(s)),o=r.toUpperCase().trim()?"FULL_NAME":void 0;return l({businessId:s,id:s,limit:!e||e>n.xX?n.xX:e,filters:a,sortBy:o,searchBy:i,searchTerm:c,startIndex:d,sortDirection:u,includeAssetSummary:E})}let m=await (0,i.Z)({url:`/ads/internal/business_access/businesses/${s}/members/`,method:"GET",data:{limit:e,filters:a?JSON.stringify(a):void 0,sort_by:r,search_by:_,start_index:d,search_value:c,assets_summary:E?"true":"false",sort_ascending:"ASCENDING"===u,extend_info_from_user_api:!0}});return m.resource_response},b=async({id:s})=>{let e=t.Z()?.experimentsClient.checkExperiment("business_access_employees_api_v4_migration").anyEnabled??!1,a=await (0,i.Z)({url:e?`/ads/v4/business_access/businesses/${s}/owner/`:`/ads/internal/business_access/businesses/${s}/owner/`});return a.resource_response.data},A=async({businessId:s,personId:e,limit:a,sortBy:c,searchBy:d="name",searchTerm:u,startIndex:E,sortDirection:o,assetPermissionType:l,includeAssetSummary:m=!1})=>{let{anyEnabled:b}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{},A={sort_by:c,search_by:d,start_index:E,search_value:u,sort_ascending:"ASCENDING"===o},N=b?n.xX:n.cU,p=a&&a<N?a:N;if(b){let a=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:p,...A,...0===l||1===l?{asset_permission_type:(0,r.bO)(l)}:{}}});if(m){let e=await (0,_.pI)({businessId:s,assetIds:a.resource_response.data.data.map(s=>s.asset_id),resourceType:"AD_ACCOUNT"}),t=a.resource_response.data.data,r=t.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),a.resource_response);return r}return a.resource_response}{let a=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,data:{limit:p,...A,...Number.isInteger(l)?{asset_permission_type:l}:{}}});return a.resource_response}},N=async({businessId:s,personId:e,limit:a,sortBy:c,searchBy:d="name",searchTerm:u,startIndex:E,sortDirection:o,assetPermissionType:l,includeAssetSummary:m=!1})=>{let{anyEnabled:b}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{},A={sort_by:c,search_by:d,start_index:E,search_value:u,sort_ascending:"ASCENDING"===o};if(b){let t=a&&a<n.xX?a:n.xX,c=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{...A,page_size:t,resource_type:"PROFILE",...0===l||1===l?{asset_permission_type:(0,r.bO)(l)}:{}}});if(m){let e=await (0,_.pI)({businessId:s,assetIds:c.resource_response.data.data.map(s=>s.asset_id),resourceType:"PROFILE"}),a=c.resource_response.data.data,t=a.reduce((s,e)=>({...s,data:{...s.data,data:{...s.data.data,[e.asset_id]:{...s.data.data[e.asset_id],...e}}}}),e);return t}return c.resource_response}{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/`,data:{limit:a,...A,type:n.tP.PROFILE,...Number.isInteger(l)?{asset_permission_type:l}:{}}});return t.resource_response}},p=async({businessId:s,personId:e,limit:a,sortBy:t,searchBy:r="name",searchTerm:_,startIndex:c,sortDirection:d,assetPermissionType:u})=>{let E=a&&a<n.xX?a:n.xX,o=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:E,sort_by:t,search_by:r,start_index:c,search_value:_,sort_ascending:"ASCENDING"===d,resource_type:"ASSET_GROUP",asset_permission_type:u}});return o.resource_response},S=async({businessId:s,personId:e,assetId:a})=>{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/`});return t.resource_response},I=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r,roles:n,permissions:_})=>{let{anyEnabled:c}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(c){let t=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:_.includes("ADMIN")?["ADMIN"]:_,business_hierarchy_node_id:r}});return t.resource_response.data}{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{finalRoles:n.includes("ADMIN")?["ADMIN"]:n,business_hierarchy_node_id:r}});return t.resource_response.data}},y=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r})=>{let{anyEnabled:n}=t.Z()?.experimentsClient.checkExperiment("business_access_assets_and_history_api_v4_migration")??{};if(n){let t=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:r}});return t.resource_response.data}{let t=await (0,i.Z)({url:`ads/internal/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:r}});return t.resource_response.data}},T=async({businessId:s,assetId:e,limit:a,sortBy:t,searchBy:r="FULL_NAME",searchTerm:_,startIndex:c,sortDirection:d})=>{let u=a&&a<n.xX?a:n.xX,E=await (0,i.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,method:"GET",data:{page_size:u,sort_by:t,search_by:r,search_value:_,start_index:c,sort_ascending:"ASCENDING"===d}}),{data:o}={data:void 0,...E.resource_response};return o}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/3329-8c8acef9a561ee98.mjs.map