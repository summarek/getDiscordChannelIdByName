# getDiscordChannelIdByName
A way to get an Id of channel only if know some part of it's name.

Empty string "" is a wildcard!

Example:
  console.log(getDiscordChannelIdByName("pogadanki", client));
  
  Output:
  [
    '��pogadanki-suby: 314824302018953236',
    '�⚽pogadanki-etoto-pl: 758037721594855450',
    '��pogadanki-vipy: 559817244268560405',
    '��pogadanki-administracja: 631072131140026399',
    '�pogadanki-anime: 542023027043336222',
    '��pogadanki-moderacja: 858692023980261376',
    '�pogadanki: 758040571024506891',
    '��pogadanki-naukowe: 543900487699922974',
    '��pogadanki-famemma: 592010010981302285',
    '��pogadanki: 843591917325516860',
    'pogadanki-ciekawostkowiczow: 630435639350788097',
    '�pogadanki-powrotowcuw-i-amatorow-tanca-towarzyskiego: 547802606458765313',
    '�propozycje-discord-pogadanki: 561545566329503773'
  ]
