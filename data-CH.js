// Data sets for car sales in Switzerland

"use strict";

db.addCountry("CH", "Switzerland");

db.insert(db.countries.CH, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_1.xlsx",
{ "Alfa Romeo": 280
, "Audi": 1018
, "BMW": 1859
, "BMW Alpina": 9
, "Chevrolet": 14
, "Citroën": 542
, "Dacia": 568
, "DS Automobiles": 70
, "Fiat": 693
, "Ford": 957
, "Honda": 272
, "Hyundai": 691
, "Infiniti": 8
, "Jaguar": 116
, "Jeep": 349
, "Kia": 285
, "Land-Rover": 308
, "Lexus": 48
, "Maserati": 66
, "Mazda": 517
, "Mercedes-Benz": 1826
, "Mini": 368
, "Mitsubishi": 231
, "Nissan": 493
, "Opel": 871
, "Peugeot": 698
, "Porsche": 258
, "Renault": 818
, "Seat": 961
, "Škoda": 1540
, "Smart": 176
, "SsangYong": 63
, "Subaru": 345
, "Suzuki": 504
, "Toyota": 689
, "Volkswagen": 2360
, "Volvo": 712
, "other": 88
});

db.insert(db.countries.CH, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 45
, "Tesla|Model S": 9
, "Tesla|Model X": 6
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 2
, "Nissan|Leaf": 1
});

db.insert(db.countries.CH, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_2.xlsx",
{ "Alfa Romeo": 241
, "Aston Martin": 10
, "Audi": 1341
, "BMW": 1841
, "BMW Alpina": 8
, "Chevrolet": 9
, "Citroën": 488
, "Dacia": 731
, "DS Automobiles": 50
, "Fiat": 675
, "Ford": 1097
, "Honda": 365
, "Hyundai": 620
, "Infiniti": 12
, "Jaguar": 110
, "Jeep": 261
, "Kia": 339
, "Land-Rover": 263
, "Lexus": 38
, "Maserati": 55
, "Mazda": 524
, "Mercedes-Benz": 1997
, "Mini": 481
, "Mitsubishi": 289
, "Nissan": 438
, "Opel": 1035
, "Peugeot": 698
, "Porsche": 272
, "Renault": 970
, "Seat": 1024
, "Škoda": 1642
, "Smart": 122
, "SsangYong": 71
, "Subaru": 335
, "Suzuki": 514
, "Toyota": 696
, "Volkswagen": 1947
, "Volvo": 557
, "other": 126
});

db.insert(db.countries.CH, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 63
, "Tesla|Model X": 9
, "Tesla|Model S": 28
, "Peugeot|iOn": 4
, "Nissan|Leaf": 0
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_3.xlsx",
{ "Alfa Romeo": 360
, "Aston Martin": 24
, "Audi": 1603
, "BMW": 2037
, "Chevrolet": 25
, "Citroën": 706
, "Dacia": 759
, "DS Automobiles": 54
, "Fiat": 744
, "Ford": 1567
, "Honda": 543
, "Hyundai": 736
, "Infiniti": 10
, "Jaguar": 182
, "Jeep": 378
, "Kia": 502
, "Land-Rover": 409
, "Lexus": 48
, "Maserati": 59
, "Mazda": 595
, "Mercedes-Benz": 2413
, "Mini": 593
, "Mitsubishi": 472
, "Nissan": 592
, "Opel": 1199
, "Peugeot": 951
, "Porsche": 457
, "Renault": 1166
, "Seat": 1015
, "Škoda": 1748
, "Smart": 153
, "SsangYong": 71
, "Subaru": 499
, "Suzuki": 711
, "Toyota": 902
, "Volkswagen": 2606
, "Volvo": 773
, "other": 464
});

db.insert(db.countries.CH, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 84
, "Tesla|Model X": 113
, "Tesla|Model S": 209
, "Peugeot|iOn": 3
, "Nissan|Leaf": 58
, "Citroën|C-Zero": 1
});

db.insert(db.countries.CH, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_4.xlsx",
{ "Alfa Romeo": 286
, "Aston Martin": 19
, "Audi": 1745
, "BMW": 2126
, "BMW Alpina": 8
, "Chevrolet": 25
, "Citroën": 565
, "Dacia": 742
, "DS Automobiles": 68
, "Fiat": 936
, "Ford": 1164
, "Honda": 266
, "Hyundai": 844
, "Infiniti": 9
, "Jaguar": 142
, "Jeep": 469
, "Kia": 538
, "Land-Rover": 299
, "Lexus": 50
, "Maserati": 62
, "Mazda": 497
, "Mercedes-Benz": 2089
, "Mini": 558
, "Mitsubishi": 327
, "Nissan": 338
, "Opel": 917
, "Peugeot": 837
, "Porsche": 411
, "Renault": 1468
, "Seat": 1090
, "Škoda": 1423
, "Smart": 155
, "SsangYong": 70
, "Subaru": 468
, "Suzuki": 829
, "Toyota": 985
, "Volkswagen": 2831
, "Volvo": 620
, "other": 243
});

db.insert(db.countries.CH, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 81
, "Tesla|Model X": 18
, "Tesla|Model S": 49
, "Peugeot|iOn": 1
, "Nissan|Leaf": 25
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_5.xlsx",
{ "Alfa Romeo": 475
, "Aston Martin": 18
, "Audi": 1714
, "BMW": 2235
, "BMW Alpina": 10
, "Chevrolet": 28
, "Citroën": 564
, "Dacia": 821
, "DS Automobiles": 76
, "Fiat": 873
, "Ford": 1314
, "Honda": 267
, "Hyundai": 634
, "Infiniti": 13
, "Jaguar": 142
, "Jeep": 530
, "Kia": 475
, "Land-Rover": 256
, "Lexus": 47
, "Maserati": 41
, "Mazda": 483
, "Mercedes-Benz": 2188
, "Mini": 520
, "Mitsubishi": 394
, "Nissan": 341
, "Opel": 1095
, "Peugeot": 869
, "Porsche": 384
, "Renault": 1404
, "Seat": 1153
, "Škoda": 1887
, "Smart": 218
, "SsangYong": 64
, "Subaru": 457
, "Suzuki": 696
, "Toyota": 858
, "Volkswagen": 3414
, "Volvo": 649
, "other": 219
});

db.insert(db.countries.CH, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 52
, "Tesla|Model X": 8
, "Tesla|Model 3": 1
, "Tesla|Model S": 55
, "Peugeot|iOn": 2
, "Nissan|Leaf": 15
, "Citroën|C-Zero": 3
});

db.insert(db.countries.CH, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_6.xlsx",
{ "Alfa Romeo": 382
, "Aston Martin": 19
, "Audi": 1587
, "BMW": 2344
, "Chevrolet": 14
, "Citroën": 788
, "Dacia": 1061
, "DS Automobiles": 88
, "Fiat": 956
, "Ford": 1728
, "Honda": 340
, "Hyundai": 587
, "Infiniti": 6
, "Jaguar": 285
, "Jeep": 389
, "Kia": 521
, "Land-Rover": 421
, "Lexus": 28
, "Maserati": 50
, "Mazda": 668
, "Mercedes-Benz": 2383
, "Mini": 557
, "Mitsubishi": 451
, "Nissan": 422
, "Opel": 1524
, "Peugeot": 790
, "Porsche": 433
, "Renault": 1779
, "Seat": 1184
, "Škoda": 1977
, "Smart": 174
, "SsangYong": 74
, "Subaru": 444
, "Suzuki": 880
, "Toyota": 935
, "Volkswagen": 4033
, "Volvo": 737
, "other": 437
});

db.insert(db.countries.CH, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 71
, "Tesla|Model X": 147
, "Tesla|Model S": 136
, "Peugeot|iOn": 1
, "Nissan|Leaf": 25
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_7.xlsx",
{ "Alfa Romeo": 323
, "Aston Martin": 17
, "Audi": 1897
, "BMW": 2088
, "BMW Alpina": 6
, "Chevrolet": 38
, "Citroën": 726
, "Dacia": 845
, "DS Automobiles": 111
, "Fiat": 867
, "Ford": 1314
, "Honda": 204
, "Hyundai": 679
, "Infiniti": 9
, "Jaguar": 114
, "Jeep": 375
, "Kia": 301
, "Land-Rover": 201
, "Lexus": 64
, "Maserati": 46
, "Mazda": 478
, "Mercedes-Benz": 1573
, "Mini": 499
, "Mitsubishi": 416
, "Nissan": 339
, "Opel": 937
, "Peugeot": 1158
, "Porsche": 375
, "Renault": 924
, "Seat": 1228
, "Škoda": 1426
, "Smart": 180
, "SsangYong": 57
, "Subaru": 325
, "Suzuki": 429
, "Toyota": 663
, "Volkswagen": 3288
, "Volvo": 780
, "other": 183
});

db.insert(db.countries.CH, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 46
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 13
, "Tesla|Model S": 18
, "Peugeot|iOn": 3
, "Nissan|Leaf": 21
, "Citroën|C-Zero": 5
});

db.insert(db.countries.CH, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_8.xlsx",
{ "Alfa Romeo": 316
, "Aston Martin": 15
, "Audi": 1608
, "BMW": 1741
, "Chevrolet": 13
, "Citroën": 425
, "Dacia": 656
, "DS Automobiles": 32
, "Fiat": 762
, "Ford": 1104
, "Honda": 247
, "Hyundai": 561
, "Infiniti": 12
, "Jaguar": 55
, "Jeep": 367
, "Kia": 337
, "Land-Rover": 173
, "Lexus": 62
, "Maserati": 23
, "Mazda": 454
, "Mercedes-Benz": 1850
, "Mini": 428
, "Mitsubishi": 313
, "Nissan": 334
, "Opel": 696
, "Peugeot": 714
, "Porsche": 267
, "Renault": 693
, "Seat": 907
, "Škoda": 1213
, "Smart": 157
, "SsangYong": 62
, "Subaru": 268
, "Suzuki": 460
, "Toyota": 709
, "Volkswagen": 2741
, "Volvo": 485
, "other": 224
});

db.insert(db.countries.CH, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 82
, "Jaguar|I-Pace": 3
, "Tesla|Model X": 39
, "Tesla|Model S": 32
, "Peugeot|iOn": 1
, "Nissan|Leaf": 58
, "Citroën|C-Zero": 0
});

db.insert(db.countries.CH, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_9.xlsx",
{ "Alfa Romeo": 220
, "Aston Martin": 13
, "Audi": 1326
, "BMW": 1512
, "BMW Alpina": 9
, "Chevrolet": 17
, "Citroën": 379
, "Dacia": 389
, "DS Automobiles": 36
, "Fiat": 705
, "Ford": 1242
, "Honda": 143
, "Hyundai": 601
, "Infiniti": 13
, "Jaguar": 188
, "Jeep": 426
, "Kia": 516
, "Land-Rover": 228
, "Lexus": 60
, "Maserati": 52
, "Mazda": 526
, "Mercedes-Benz": 1902
, "Mini": 386
, "Mitsubishi": 281
, "Nissan": 370
, "Opel": 854
, "Peugeot": 586
, "Porsche": 192
, "Renault": 835
, "Seat": 502
, "Škoda": 1148
, "Smart": 180
, "SsangYong": 73
, "Subaru": 363
, "Suzuki": 581
, "Toyota": 771
, "Volkswagen": 1888
, "Volvo": 543
, "other": 353
});

db.insert(db.countries.CH, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 37
, "Jaguar|I-Pace": 1
, "Tesla|Model X": 130
, "Tesla|Model S": 145
, "Peugeot|iOn": 3
, "Nissan|Leaf": 66
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_10.xlsx",
{ "Alfa Romeo": 292
, "Aston Martin": 12
, "Audi": 1596
, "BMW": 1686
, "Chevrolet": 14
, "Citroën": 423
, "Dacia": 533
, "DS Automobiles": 34
, "Fiat": 738
, "Ford": 1209
, "Honda": 373
, "Hyundai": 697
, "Infiniti": 13
, "Jaguar": 215
, "Jeep": 458
, "Kia": 342
, "Land-Rover": 361
, "Lexus": 73
, "Maserati": 53
, "Mazda": 467
, "Mercedes-Benz": 2175
, "Mini": 413
, "Mitsubishi": 448
, "Nissan": 339
, "Opel": 944
, "Peugeot": 658
, "Porsche": 167
, "Renault": 797
, "Seat": 588
, "Škoda": 1370
, "Smart": 185
, "SsangYong": 55
, "Subaru": 445
, "Suzuki": 657
, "Toyota": 830
, "Volkswagen": 2203
, "Volvo": 770
, "other": 155
});

db.insert(db.countries.CH, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 86
, "Jaguar|I-Pace": 15
, "Tesla|Model X": 8
, "Tesla|Model S": 27
, "Peugeot|iOn": 5
, "Nissan|Leaf": 57
, "Citroën|C-Zero": 1
});

db.insert(db.countries.CH, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_11.xlsx",
{ "Alfa Romeo": 248
, "Aston Martin": 11
, "Audi": 1081
, "BMW": 2240
, "Chevrolet": 26
, "Citroën": 328
, "Dacia": 619
, "DS Automobiles": 64
, "Fiat": 681
, "Ford": 1251
, "Honda": 321
, "Hyundai": 832
, "Infiniti": 12
, "Jaguar": 200
, "Jeep": 455
, "Kia": 289
, "Land-Rover": 316
, "Lexus": 104
, "Maserati": 48
, "Mazda": 512
, "Mercedes-Benz": 2319
, "Mini": 377
, "Mitsubishi": 447
, "Nissan": 371
, "Opel": 686
, "Peugeot": 867
, "Porsche": 141
, "Renault": 975
, "Seat": 892
, "Škoda": 1833
, "Smart": 175
, "SsangYong": 47
, "Subaru": 346
, "Suzuki": 753
, "Toyota": 835
, "Volkswagen": 2485
, "Volvo": 692
, "other": 224
});

db.insert(db.countries.CH, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 127
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 22
, "Tesla|Model S": 46
, "Peugeot|iOn": 0
, "Nissan|Leaf": 46
, "Citroën|C-Zero": 5
});

db.insert(db.countries.CH, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_12.xlsx",
{ "Alfa Romeo": 194
, "Audi": 1862
, "BMW": 2518
, "Chevrolet": 33
, "Citroën": 482
, "Dacia": 577
, "DS Automobiles": 64
, "Fiat": 540
, "Ford": 1238
, "Honda": 361
, "Hyundai": 722
, "Infiniti": 11
, "Jaguar": 209
, "Jeep": 386
, "Kia": 434
, "Land-Rover": 574
, "Lexus": 112
, "Maserati": 45
, "Mazda": 506
, "Mercedes-Benz": 2946
, "Mini": 532
, "Mitsubishi": 480
, "Nissan": 343
, "Opel": 1175
, "Peugeot": 886
, "Porsche": 208
, "Renault": 900
, "Seat": 924
, "Škoda": 1953
, "Smart": 150
, "SsangYong": 66
, "Subaru": 386
, "Suzuki": 659
, "Toyota": 635
, "Volkswagen": 3153
, "Volvo": 804
, "other": 471
});

db.insert(db.countries.CH, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 134
, "Jaguar|I-Pace": 2
, "Tesla|Model X": 112
, "Tesla|Model S": 83
, "Peugeot|iOn": 47
, "Nissan|Leaf": 56
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_3.xlsx",
{ "Alfa Romeo": 269
, "Alpine": 10
, "Aston Martin": 12
, "Audi": 1183
, "BMW": 1583
, "Citroën": 424
, "Dacia": 674
, "DS Automobiles": 58
, "Fiat": 590
, "Ford": 974
, "Honda": 218
, "Hyundai": 577
, "Infiniti": 11
, "Jaguar": 194
, "Jeep": 359
, "Kia": 281
, "Land Rover": 313
, "Lexus": 54
, "Maserati": 26
, "Mazda": 411
, "Mercedes-Benz": 1779
, "Mini": 355
, "Mitsubishi": 314
, "Nissan": 345
, "Opel": 471
, "Peugeot": 802
, "Porsche": 122
, "Renault": 642
, "Seat": 664
, "Škoda": 1745
, "Smart": 140
, "SsangYong": 46
, "Subaru": 366
, "Suzuki": 480
, "Tesla": 38
, "Toyota": 724
, "Volkswagen": 2670
, "Volvo": 882
, "other": 125
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 122
, "Jaguar|I-Pace": 14
, "Tesla|Model X": 15
, "Tesla|Model S": 23
, "Peugeot|iOn": 8
, "Nissan|Leaf": 58
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_3.xlsx",
{ "Alfa Romeo": 247
, "Alpine": 22
, "Aston Martin": 22
, "Audi": 777
, "BMW": 1945
, "Citroën": 430
, "Dacia": 556
, "DS Automobiles": 28
, "Fiat": 635
, "Ford": 1104
, "Honda": 348
, "Hyundai": 573
, "Infiniti": 10
, "Jaguar": 172
, "Jeep": 428
, "Kia": 310
, "Land Rover": 342
, "Lexus": 29
, "Maserati": 24
, "Mazda": 375
, "Mercedes-Benz": 2084
, "Mini": 310
, "Mitsubishi": 262
, "Nissan": 369
, "Opel": 723
, "Peugeot": 648
, "Porsche": 67
, "Renault": 741
, "Seat": 1298
, "Škoda": 1963
, "Smart": 187
, "SsangYong": 41
, "Subaru": 284
, "Suzuki": 510
, "Tesla": 316
, "Toyota": 881
, "Volkswagen": 2445
, "Volvo": 572
, "other": 98
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 91
, "Jaguar|I-Pace": 39
, "Tesla|Model X": 13
, "Tesla|Model 3": 277
, "Tesla|Model S": 26
, "Nissan|Leaf": 59
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_3.xlsx",
{ "Alfa Romeo": 259
, "Alpine": 29
, "Aston Martin": 19
, "Audi": 2173
, "BMW": 1881
, "Citroën": 523
, "Dacia": 691
, "DS Automobiles": 47
, "Fiat": 811
, "Ford": 1301
, "Honda": 376
, "Hyundai": 672
, "Infiniti": 15
, "Jaguar": 257
, "Jeep": 442
, "Kia": 437
, "Land Rover": 426
, "Lexus": 64
, "Maserati": 43
, "Mazda": 556
, "Mercedes-Benz": 2286
, "Mini": 453
, "Mitsubishi": 358
, "Nissan": 622
, "Opel": 826
, "Peugeot": 827
, "Porsche": 241
, "Renault": 1084
, "Seat": 1387
, "Škoda": 2420
, "Smart": 242
, "SsangYong": 43
, "Subaru": 389
, "Suzuki": 821
, "Tesla": 1243
, "Toyota": 919
, "Volkswagen": 2829
, "Volvo": 755
, "other": 191
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 151
, "Jaguar|I-Pace": 70
, "Tesla|Model X": 69
, "Tesla|Model 3": 1094
, "Tesla|Model S": 80
, "Audi|e-tron": 93
, "Nissan|Leaf": 46
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_4.xlsx",
{ "Alfa Romeo": 274
, "Alpine": 18
, "Aston Martin": 28
, "Audi": 1399
, "BMW": 2198
, "Citroën": 499
, "Dacia": 686
, "DS Automobiles": 60
, "Fiat": 744
, "Ford": 1124
, "Honda": 267
, "Hyundai": 921
, "Infiniti": 14
, "Jaguar": 278
, "Jeep": 526
, "Kia": 430
, "Land Rover": 360
, "Lexus": 66
, "Maserati": 50
, "Mazda": 538
, "Mercedes-Benz": 2108
, "Mini": 538
, "Mitsubishi": 348
, "Nissan": 553
, "Opel": 1129
, "Peugeot": 814
, "Porsche": 441
, "Renault": 1069
, "Seat": 1279
, "Škoda": 2192
, "Smart": 217
, "SsangYong": 61
, "Subaru": 695
, "Suzuki": 708
, "Tesla": 538
, "Toyota": 966
, "Volkswagen": 3331
, "Volvo": 883
, "other": 270
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 164
, "Jaguar|I-Pace": 69
, "Tesla|Model X": 16
, "Tesla|Model 3": 495
, "Tesla|Model S": 27
, "Peugeot|iOn": 1
, "Audi|e-tron": 33
, "Nissan|Leaf": 39
, "Citroën|C-Zero": 2
});