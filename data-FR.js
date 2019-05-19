// Data sets for car sales in France

"use strict";

db.addCountry("FR", "France");

db.insert(db.countries.FR, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#jan (Unclear: Why is Tesla missing?)",
{ "Peugeot": 29652
, "Citroën": 17563
, "Opel": 5882
, "DS Automobiles": 1767
, "Renault": 26363
, "Dacia": 9350
, "Alpine": 323
, "Volkswagen": 10141
, "Audi": 3166
, "Škoda": 2185
, "Seat": 2003
, "Porsche": 243
, "Toyota": 8357
, "Lexus": 532
, "Kia": 3364
, "Hyundai": 2785
, "Ford": 5860
, "BMW": 3441
, "Mini": 2251
, "Fiat": 4865
, "Jeep": 476
, "Alfa Romeo": 254
, "Mercedes-Benz": 4224
, "Smart": 649
, "Nissan": 2546
, "Infiniti": 11
, "Volvo": 1574
, "Land Rover": 455
, "Jaguar": 294
, "other": 4491
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15495492248cd691d9fa4f2bee8d93483d2fbf9f2a-Barometre%20janvier%20AvereFrance.pdf",
{ "Renault|ZOE": 1496
, "Nissan|Leaf": 341
, "smart|fortwo electric drive": 306
, "BMW|i3 BEV": 229
, "Kia|Niro EV": 149
, "Hyundai|Kona Electric": 147
, "Citroën|C-Zero": 60
, "Peugeot|iOn": 59
, "Volkswagen|e-Golf": 50
, "Hyundai|Ioniq Electric": 47
, "Jaguar|I-Pace": 31
, "Volkswagen|e-up!": 25
, "smart|forfour electric drive": 24
, "Kia|Soul EV": 23
, "Tesla|Model S": 21
, "Nissan|e-NV200": 15
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 10
, "Citroën|E-Mehari": 8
, "Citroën|Berlingo Electric": 7
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#feb (Unclear: Why is Tesla missing?)",
{ "Peugeot": 31784
, "Citroën": 19986
, "Opel": 7122
, "DS Automobiles": 1684
, "Renault": 29812
, "Dacia": 10428
, "Alpine": 200
, "Volkswagen": 11258
, "Audi": 3766
, "Seat": 2631
, "Škoda": 2553
, "Porsche": 133
, "Toyota": 7833
, "Lexus": 351
, "Ford": 6693
, "Kia": 3471
, "Hyundai": 3129
, "Fiat": 5438
, "Jeep": 779
, "Alfa Romeo": 266
, "BMW": 3950
, "Mini": 1943
, "Mercedes-Benz": 4941
, "Smart": 724
, "Nissan": 3767
, "Infiniti": 13
, "Volvo": 1914
, "Land Rover": 461
, "Jaguar": 241
, "Chevrolet": 6
, "other": 5154
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/155186746334385712e0880d4efa60463604ed3785-immats-mars-2019.pdf",
{ "Renault|ZOE": 1197
, "Tesla|Model 3": 401
, "Nissan|Leaf": 326
, "Kia|Niro EV": 253
, "BMW|i3 BEV": 196
, "smart|fortwo electric drive": 87
, "Hyundai|Kona Electric": 79
, "Jaguar|I-Pace": 47
, "Volkswagen|e-Golf": 42
, "Peugeot|iOn": 42
, "smart|forfour electric drive": 41
, "Hyundai|Ioniq Electric": 34
, "Tesla|Model S": 33
, "Citroën|C-Zero": 22
, "Volkswagen|e-up!": 15
, "Audi|e-tron quattro": 14
, "Kia|Soul EV": 14
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 11
, "Nissan|e-NV200": 6
, "Citroën|E-Mehari": 5
, "Citroën|Berlingo Electric": 3

});

db.insert(db.countries.FR, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#mar (Unclear: Why is Tesla missing?)",
{ "Peugeot": 37262
, "Citroën": 23677
, "Opel": 7991
, "DS Automobiles": 1986
, "Renault": 45911
, "Dacia": 15838
, "Alpine": 303
, "Volkswagen": 15704
, "Audi": 5700
, "Škoda": 3268
, "Seat": 3262
, "Porsche": 278
, "Ford": 9320
, "Fiat": 7468
, "Jeep": 1145
, "Alfa Romeo": 387
, "Toyota": 8237
, "Lexus": 555
, "Kia": 4283
, "Hyundai": 3688
, "BMW": 4820
, "Mini": 2616
, "Mercedes-Benz": 6125
, "Smart": 653
, "Nissan": 4958
, "Infiniti": 17
, "Volvo": 1978
, "Land Rover": 716
, "Jaguar": 283
, "other": 7379
});

db.insert(db.countries.FR, "2019-03", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1554462213a58da558147631652560897fe8b30dee-immats-avril-2019.pdf",
{ "Renault|ZOE": 1536
, "Tesla|Model 3": 1153
, "Nissan|Leaf": 455
, "Kia|Niro EV": 299
, "BMW|i3 BEV": 207
, "Hyundai|Kona Electric": 141
, "Audi|e-tron quattro": 140
, "Peugeot|iOn": 127
, "smart|fortwo electric drive": 104
, "Citroën|C-Zero": 93
, "Volkswagen|e-Golf": 61
, "Tesla|Model S": 51
, "Hyundai|Ioniq Electric": 48
, "Tesla|Model X": 46
, "Jaguar|I-Pace": 42
, "Peugeot|Partner Electric": 37
, "Citroën|E-Mehari": 27
, "smart|forfour electric drive": 21
, "Nissan|e-NV200": 9
, "Volkswagen|e-up!": 9
, "Citroën|Berlingo Electric": 7
, "Kia|Soul EV": 1
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#apr (Unclear: Why is Tesla missing?)",
{ "Peugeot": 34117
, "Citroën": 21874
, "Opel": 6622
, "DS Automobiles": 1948
, "Renault": 31495
, "Dacia": 12501
, "Alpine": 353
, "Volkswagen": 12676
, "Audi": 5043
, "Seat": 3260
, "Škoda": 3007
, "Porsche": 352
, "Toyota": 8222
, "Lexus": 671
, "Fiat": 6476
, "Jeep": 964
, "Alfa Romeo": 292
, "Kia": 4191
, "Hyundai": 3317
, "BMW": 5037
, "Mini": 2371
, "Ford": 6371
, "Mercedes-Benz": 5504
, "Smart": 551
, "Nissan": 3315
, "Infiniti": 20
, "Volvo": 1527
, "Land Rover": 677
, "Jaguar": 370
, "other": 5062
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/155715869983878c91171338902e0fe0fb97a8c47a-immats-mai-2019.pdf",
{ "Renault|ZOE": 1472
, "Nissan|Leaf": 347
, "Tesla|Model 3": 251
, "Kia|Niro EV": 239
, "BMW|i3 BEV": 202
, "Hyundai|Kona Electric": 161
, "smart|fortwo electric drive": 110
, "Peugeot|iOn": 58
, "Citroën|C-Zero": 53
, "Jaguar|I-Pace": 53
, "smart|forfour electric drive": 51
, "Hyundai|Ioniq Electric": 47
, "Volkswagen|e-Golf": 38
, "Tesla|Model S": 33
, "Audi|e-tron quattro": 22
, "Tesla|Model X": 21
, "Citroën|E-Mehari": 16
, "Volkswagen|e-up!": 12
, "Citroën|Berlingo Electric": 10
, "Kia|Soul EV": 10
, "Peugeot|Partner Electric": 10
, "Nissan|e-NV200": 6
});

// http://www.avere-france.org/Site/Category/?arborescence_id=143

// Template:
// db.insert(db.countries.FR, "", db.dsTypes.ElectricCarsByModel, "",
// { "Renault|ZOE":
// , "Tesla|Model 3":
// , "Nissan|Leaf":
// , "Kia|Niro EV":
// , "BMW|i3 BEV":
// , "Hyundai|Kona Electric":
// , "Audi|e-tron quattro":
// , "Peugeot|iOn":
// , "smart|fortwo electric drive":
// , "Citroën|C-Zero":
// , "Volkswagen|e-Golf":
// , "Tesla|Model S":
// , "Hyundai|Ioniq Electric":
// , "Tesla|Model X":
// , "Jaguar|I-Pace":
// , "Peugeot|Partner Electric":
// , "Citroën|E-Mehari":
// , "smart|forfour electric drive":
// , "Nissan|e-NV200":
// , "Volkswagen|e-up!":
// , "Citroën|Berlingo Electric":
// , "Kia|Soul EV":
// });