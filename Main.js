const currency = "usd";        
const date_from = "20220707";    
const date_to = "20220730";      

const url = new URL("https://bank.gov.ua/NBU_Exchange/exchange_site");

url.searchParams.set("start", date_from);
url.searchParams.set("end", date_to);
url.searchParams.set("valcode", currency);
url.searchParams.set("sort", "exchangedate");
url.searchParams.set("order", "desc");
url.searchParams.set("json", "true");

console.log(url.toString());
