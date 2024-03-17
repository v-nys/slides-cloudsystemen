# Labo 2

## Vragenreeks 1
1. 3 lagen
2. fysiek, datalink en netwerk. Onderaan in Wireshark staan 4 protocols, maar ICMP en IP zitten allebei op de netwerklaag. Je hebt altijd *minstens* even veel lagen als protocols, want op elke laag is minstens een protocol actief. Je kan dus ook nooit een onderliggende laag missen (bijvoorbeeld TCP zonder IP daar onder kan gewoon niet).
3. 74 bytes / stuk
4. Hier kan je verschillende antwoorden geven, op voorwaarde dat je ze goed verklaart. Als je het volledige ICMP-bericht ziet als "payload", dan is dit 34 bytes (grootte Ethernetgedeelte en IP-gedeelte). Als je controle-informatie van ICMP meeneemt, is het 42 bytes.
5. Gelijkaardig aan de vorige vraag. Als je daar "34" antwoordde, is het hier 40. Als je daar "42" antwoordde, is het hier 32.
6. een `ping`
7. 192.168.1.36. Je weet dat dit de client is, omdat het de "Source" van een "request" is. Let op: voor het volgende pakket is de source "8.8.8.8", maar dat is een "reply".
8. 8.8.8.8
9. IP(v4)
10. half duplex (typisch voor request-reply)

## Vragenreeks 2
Filteren doe je via de filter `ip.addr == ...` (waarbij je zelf een van de betrokken IP-adressen invult.

De HTML kan je terugvinden voor neverSSL.com, maar niet voor www.ap.be. Voor neverSSL.com ga je op zoek in de HTTP-data. Voor www.ap.be wordt TLS gebruikt en kan je de data niet inspecteren tenzij je eerst je pre-master secret key logt of werkt met een extra certificaat zoals we tijdens de les gedaan hebben met MITMProxy.

## Vragenreeks 3
Het MAC-adres vind je in het gedeelte "Ethernet II" in Wireshark (want dat is laag 2). 

De client is opnieuw de source, dus het adres is `
a0:51:0b:4d:0c:b0`. De tegenpartij is `a4 b1 e9 a8 18 58`.

De client heeft een netwerkkaart van "Intel Corporate" en de tegenpartij heeft een netwerkkaart van "Technicolor Delivery Technologies Belgium NV". Dit kan je vinden op [macvendors](https://macvendors.com). Drie bytes volstaan voor de fabrikant.

**Merk op: we spreken hier over "tegenpartij" en niet "server".** Dat komt omdat de server de eindbestemming is. Omdat het Ethernetgedeelte op elke tussenstop (buiten een hub) wordt aangepast, kunnen we het MAC-adres van de server hier nergens aflezen.

# Labo 3

## Vragenreeks 1
1. fysiek, datalink, netwerk, transport, applicatie (zie onderaan: het betreft HTTP)
2. 659 (zie bovenaan)
3. 193.191.180.79 (zie IP-gedeelte)
4. f4:b7:e2:77:25:5e (zie Ethernetgedeelte)
5. 80 (zie TCP-gedeelte)
6. HTTP
7. 1.1 (zie start pakket, behoort standaard formaat van een HTTP-pakket)
8. www.bpost.be/nl/faqs (host + pad, **niet** "Referer")
9. GET
10. 9 (tellen vanaf gedeelte "Host" tot (lege) body)
11. Geen. Er zijn headers, maar de body is leeg. Je ziet dat omdat `\r\n` overeenstemt met de laatste twee bytes op de rechterzijde in de hexadecimale vorm.

## Vragenreeks 2
1. Dit doe je door gewoon "http" in te typen (zonder quotes).
2. www.kowaja.be (zie "Host" header)
3. header.html, content.html, ruler.gif, dtree.css, folder.gif, joinbottom.gif (allemaal (mogelijk onrechtstreeks) vermeld in het eerste antwoord)
4. dtree.css (zie pakket 26)
5. 404
6. (is geen vraag met een antwoord, maar maakt de volgende zaken makkelijker af te lezen)
7. 2 juni 2004
8. 27 september 2019
9. centaur
10. kowaja@pandora.be

## Vragenreeks 3
1. 7 (de pagina en de embedded content)
2. nee
3. dtree.css (zie vorige reeks)
4. 404, dus de gevraagde file bestaat niet (meer) of de naam is fout geschreven
5. ruler.gif
6. image viewer
7. pakket 23

## Vragenreeks 4
1. is geen vraag
2. is geen vraag
3. gebruik: `curl -X POST "https://httpbin.org/post" -H  "accept: application/json"`
4. is geen vraag
5. is geen vraag
6. het moet een HTTP2-server zijn, want er wordt gebruik gemaakt van TLS 1.2.

## Vragenreeks 5
1. schrijf in de balk: `ip.addr eq 192.168.1.47 and ip.addr eq 52.114.128.75`. Je kan dit ook krijgen via rechterklik.
2. pakket 1 bevat de "client hello". De TCP-handshake is al eerder gedaan. pakketten 2 tot en met 6 **samen** vormen de Server hello, bevatten het certificaat en de "server hello done". Pakket 7: client key exchange en eerste change cipher spec. "Finished" is niet aangeduid in Wireshark. Pakket 8 bevat de change cipher spec in de omgekeerde richting. Vanaf pakket 9 stemt overeen met het onderdeel "data transmission".
3. TLS 1.2
4. TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384, TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256, TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (zie "Cipher suites" in de "hello")
5. TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (zie "Server Hello", onderdeel "Cipher Suite", waarin een keuze gemaakt wordt uit de aangeboden opties)
6. www.digicert.com (de "issuer" van het certificaat)
7. TLS 1.3
8. ja, alles vanaf TLS 1.0 tot en met 1LS 1.3 (zie "Extension: supported_versions" in de "client hello")
9. TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256 (zie opnieuw "Cipher suites" in de "hello")
10. pakket 21
