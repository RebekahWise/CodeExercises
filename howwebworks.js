//In your own terms, define the following terms:

// - What is HTTP?
//Hypertext transfer protocol - This is a set of rules that determine how data is exchanged between a client and a web server. This is used to transmit information accross the web

// - What is a URL?
// A URL is a uniform resource locator or web address that identifies the specific location of a particular resource on the internet. It is als a nickname for a server or hostname. It identifies the protocol, hostname, port, resource, and query.

// - What is DNS?
// DNS server decodes a URL to a speciic IP address. DNS stands for Domain name system. llows us to use URLs instead of trying to remember IP addresses

// - What is a query string?
// A query strig provides extra information at the end of a URL. This could be search terms for infomation from forms.

// - What are two HTTP verbs and how are they different?
//GET - when you point to a specific resource on the internet the browser makes a request to get that resource.
//POST - when you are wanting to change or update information or adding information to a database or server to be stored or used.

// - What is an HTTP request?
//When the browser points to a specific resource on the internet the browser makes a request to get that resource

// - What is an HTTP response?
//the returned inormation and data for a request that was made to the server

// - What is an HTTP header? Give a couple examples of request and response headers you have seen.
//A header provides additional information in a request to specify requirements or type of data returned.
//ex: accept: HTTP
// accept-language: fr

// - What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
//1. Your browser looks up the URL name into an IP address using DNS
// 2. Your browser makes a request to that IP address, including headers. The server then sends a response with a status code. The browser uses the nformation to render a webpage and interact with Javascript for interactivity

// 1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”
// curl -X GET "https://icanhazdadjoke.com/search?term=pirate"
// Why couldn't the kid see the pirate movie? Because it was rated arrr!
// What did the pirate say on his 80th birthday? Aye Matey!
// What does a pirate pay for his corn? A buccaneer!
// Why do pirates not know the alphabet? They always get stuck at "C".
// Why are pirates called pirates? Because they arrr!

// 2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
// dig https://icanhazdadjoke.com/

// ; <<>> DiG 9.10.6 <<>> https://icanhazdadjoke.com/
// ;; global options: +cmd
// ;; Got answer:
// ;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 35840
// ;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

// ;; OPT PSEUDOSECTION:
// ; EDNS: version: 0, flags:; udp: 512
// ;; QUESTION SECTION:
// ;https://icanhazdadjoke.com/.	IN	A

// ;; AUTHORITY SECTION:
// .			30	IN	SOA	a.root-servers.net. nstld.verisign-grs.com. 2024100501 1800 900 604800 86400

// ;; Query time: 36 msec
// ;; SERVER: 172.16.0.1#53(172.16.0.1)
// ;; WHEN: Sat Oct 05 17:04:09 EDT 2024
// ;; MSG SIZE  rcvd: 131

// 3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.
// python3 -m http.server
// Serving HTTP on :: port 8000 (http://[::]:8000/) ...
// ::1 - - [05/Oct/2024 17:05:42] "GET / HTTP/1.1" 200 -
