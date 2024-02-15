// created with script './create-types-test-file.sh' at Tue Feb 13 16:40:29 CET 2024

import { Journeys, Journey, Alternative, Station, Stop, Location, Departures, Arrivals } from './types'
import { RawResult, RawResponse } from './types-raw-api'
const r1 : RawResult = 
{
	"common": {
		"locL": [
			{
				"lid": "A=1@O=Köln Hbf@X=6958730@Y=50943029@U=80@L=8000207@",
				"type": "S",
				"name": "Köln Hbf",
				"icoX": 0,
				"extId": "8000207",
				"state": "F",
				"crd": {
					"x": 6959197,
					"y": 50942823,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 319
			},
			{
				"lid": "A=1@O=Nürnberg Hbf@X=11082989@Y=49445615@U=80@L=8000284@",
				"type": "S",
				"name": "Nürnberg Hbf",
				"icoX": 0,
				"extId": "8000284",
				"state": "F",
				"crd": {
					"x": 11082270,
					"y": 49445435,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 443
			},
			{
				"lid": "A=1@O=Köln Messe/Deutz Gl.11-12@X=6974065@Y=50941717@U=80@L=8073368@",
				"type": "S",
				"name": "Köln Messe/Deutz Gl.11-12",
				"icoX": 0,
				"extId": "8073368",
				"state": "F",
				"crd": {
					"x": 6975162,
					"y": 50940602,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 319,
				"entry": true,
				"mMastLocX": 3
			},
			{
				"lid": "A=1@O=Köln Messe/Deutz@X=6975000@Y=50940872@U=80@L=8003368@",
				"type": "S",
				"name": "Köln Messe/Deutz",
				"icoX": 0,
				"extId": "8003368",
				"state": "F",
				"crd": {
					"x": 6974578,
					"y": 50940989,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 319
			}
		],
		"prodL": [
			{
				"name": "ICE 827",
				"number": "827",
				"icoX": 0,
				"cls": 1,
				"oprX": 0,
				"prodCtx": {
					"name": "ICE  827",
					"num": "827",
					"matchId": "41",
					"catOut": "ICE",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express",
					"catIn": "ICE",
					"catCode": "0",
					"admin": "80____"
				}
			},
			{
				"name": "ICE 521",
				"number": "521",
				"icoX": 0,
				"cls": 1,
				"oprX": 0,
				"prodCtx": {
					"name": "ICE  521",
					"num": "521",
					"matchId": "41",
					"catOut": "ICE",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express",
					"catIn": "ICE",
					"catCode": "0",
					"admin": "80____"
				}
			},
			{
				"name": "ICE 523",
				"number": "523",
				"icoX": 0,
				"cls": 1,
				"oprX": 0,
				"prodCtx": {
					"name": "ICE  523",
					"num": "523",
					"matchId": "41",
					"catOut": "ICE",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express",
					"catIn": "ICE",
					"catCode": "0",
					"admin": "80____"
				}
			}
		],
		"polyL": [],
		"layerL": [
			{
				"id": "standard",
				"name": "standard",
				"index": 0,
				"annoCnt": 0
			}
		],
		"crdSysL": [
			{
				"id": "standard",
				"index": 0,
				"type": "WGS84",
				"dim": 3
			}
		],
		"opL": [
			{
				"name": "DB Fernverkehr AG",
				"icoX": 1
			}
		],
		"remL": [
			{
				"type": "A",
				"code": "CK",
				"prio": 200,
				"icoX": 2,
				"txtN": "Komfort Check-in möglich (Infos unter bahn.de/kci)"
			},
			{
				"type": "A",
				"code": "Q1",
				"prio": 1,
				"icoX": 2,
				"txtN": "From Köln Hbf within 3min by S, RB, RE during the day approx. all 5min"
			}
		],
		"icoL": [
			{
				"res": "ICE"
			},
			{
				"res": "D",
				"txt": "DB Fernverkehr AG"
			},
			{
				"res": "attr_info"
			},
			{
				"res": "DEVI"
			}
		]
	},
	"outConL": [
		{
			"cid": "C-0",
			"date": "20200411",
			"dur": "034000",
			"chg": 0,
			"sDays": {
				"sDaysR": "Mo - Sa",
				"sDaysI": "not 13., 27. Apr, 11., 12., 25. May, 1. Jun",
				"sDaysB": "7ECDBBF7EFDFBF7EFDFBF7EFDFBF7E7DF9F7E3DF9F3EFDFBF7EFDFBF7EFDFBF7EFDFBF7EFDFBF7EFDFBF7EFDFBF0"
			},
			"dep": {
				"locX": 0,
				"idx": 0,
				"dProdX": 0,
				"dPlatfS": "4 A-C",
				"dInR": true,
				"dTimeS": "031900",
				"dProgType": "PROGNOSED",
				"dTZOffset": 120,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"idx": 9,
				"aPlatfS": "9",
				"aOutR": true,
				"aTimeS": "065900",
				"aProgType": "PROGNOSED",
				"aTZOffset": 120,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 0,
					"dep": {
						"locX": 0,
						"idx": 0,
						"dProdX": 0,
						"dPlatfS": "4 A-C",
						"dInR": true,
						"dTimeS": "031900",
						"dProgType": "PROGNOSED",
						"dTrnCmpSX": {
							"tcM": 1
						},
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"idx": 9,
						"aPlatfS": "9",
						"aOutR": true,
						"aTimeS": "065900",
						"aProgType": "PROGNOSED",
						"aTZOffset": 120,
						"type": "N"
					},
					"jny": {
						"jid": "1|304103|0|80|11042020",
						"prodX": 0,
						"dirTxt": "München Hbf",
						"status": "P",
						"isRchbl": true,
						"ctxRecon": "T$A=1@O=Köln Hbf@L=8000207@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110319$202004110659$ICE  827$$1$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 1,
								"fIdx": 0,
								"tIdx": 9,
								"tagL": [
									"RES_JNY_DTL"
								]
							}
						],
						"subscr": "F"
					},
					"resState": "N",
					"resRecommendation": "N"
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=Köln Hbf@L=8000207@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110319$202004110659$ICE  827$$1$",
			"trfRes": {
				"statusCode": "OK",
				"fareSetL": [
					{
						"fareL": [
							{
								"price": { "amount": 7790 },
								"isFromPrice": true,
								"isBookable": true,
								"isUpsell": false,
								"targetCtx": "D",
								"buttonText": "Continue to booking"
							}
						]
					}
				]
			},
			"conSubscr": "F",
			"resState": "N",
			"resRecommendation": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20200410",
				"jid": "1|304103|0|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "203323"
			},
			"cksum": "2981a370_3"
		},
		{
			"cid": "C-1",
			"date": "20200411",
			"dur": "033700",
			"chg": 0,
			"sDays": {
				"sDaysR": "daily",
				"sDaysI": "not 27. Apr, 25. May, 7. Jun",
				"sDaysB": "7FFFFFFFFFFFFFFFFFFFE7CF9FFFFFFFFDFFFFFFDFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0"
			},
			"dep": {
				"locX": 0,
				"idx": 0,
				"dProdX": 1,
				"dPlatfS": "5 A-C",
				"dInR": true,
				"dTimeS": "042200",
				"dProgType": "PROGNOSED",
				"dTZOffset": 120,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"idx": 9,
				"aPlatfS": "9",
				"aOutR": true,
				"aTimeS": "075900",
				"aProgType": "PROGNOSED",
				"aTZOffset": 120,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 0,
					"dep": {
						"locX": 0,
						"idx": 0,
						"dProdX": 1,
						"dPlatfS": "5 A-C",
						"dInR": true,
						"dTimeS": "042200",
						"dProgType": "PROGNOSED",
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"idx": 9,
						"aPlatfS": "9",
						"aOutR": true,
						"aTimeS": "075900",
						"aProgType": "PROGNOSED",
						"aTZOffset": 120,
						"type": "N"
					},
					"jny": {
						"jid": "1|300959|0|80|11042020",
						"prodX": 1,
						"dirTxt": "München Hbf",
						"status": "P",
						"isRchbl": true,
						"ctxRecon": "T$A=1@O=Köln Hbf@L=8000207@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110422$202004110759$ICE  521$$1$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 1,
								"fIdx": 0,
								"tIdx": 9,
								"tagL": [
									"RES_JNY_DTL"
								]
							}
						],
						"subscr": "F"
					},
					"resState": "N",
					"resRecommendation": "N"
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=Köln Hbf@L=8000207@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110422$202004110759$ICE  521$$1$",
			"trfRes": {
				"statusCode": "OK",
				"fareSetL": [
					{
						"fareL": [
							{
								"price": { "amount": 4990 },
								"isFromPrice": true,
								"isBookable": true,
								"isUpsell": false,
								"targetCtx": "D",
								"buttonText": "Continue to booking"
							}
						]
					}
				]
			},
			"conSubscr": "F",
			"resState": "N",
			"resRecommendation": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20200410",
				"jid": "1|300959|0|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "203323"
			},
			"cksum": "68a08a04_3"
		},
		{
			"cid": "C-2",
			"date": "20200411",
			"dur": "034100",
			"chg": 0,
			"sDays": {
				"sDaysR": "Mo - Sa",
				"sDaysI": "not 13. Apr, 1. Jun",
				"sDaysB": "7ECDBBF7EFDFBF7EFDFBE7CF9FBF7E7DFBF7EFDFBF3EFDFBF7EFDFBF7EFDFBF7EFDFBF7EFDFBF7EFDFBF7EFDFBF0"
			},
			"dep": {
				"locX": 0,
				"dInR": true,
				"dTimeS": "051700",
				"dTZOffset": 120,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"idx": 14,
				"aPlatfS": "9",
				"aOutR": true,
				"aTimeS": "090100",
				"aProgType": "PROGNOSED",
				"aTZOffset": 120,
				"type": "N"
			},
			"secL": [
				{
					"type": "DEVI",
					"icoX": 3,
					"dep": {
						"locX": 0,
						"dInR": true,
						"dTimeS": "051700",
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 2,
						"aOutR": true,
						"aTimeS": "052000",
						"aTZOffset": 120,
						"type": "N"
					},
					"resState": "N",
					"resRecommendation": "N"
				},
				{
					"type": "JNY",
					"icoX": 0,
					"dep": {
						"locX": 2,
						"idx": 5,
						"dProdX": 2,
						"dPlatfS": "11",
						"dInR": true,
						"dTimeS": "052000",
						"dProgType": "PROGNOSED",
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"idx": 14,
						"aPlatfS": "9",
						"aOutR": true,
						"aTimeS": "090100",
						"aProgType": "PROGNOSED",
						"aTZOffset": 120,
						"type": "N"
					},
					"jny": {
						"jid": "1|301001|0|80|11042020",
						"prodX": 2,
						"dirTxt": "München Hbf",
						"status": "P",
						"isRchbl": true,
						"ctxRecon": "T$A=1@O=Köln Messe/Deutz Gl.11-12@L=8073368@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110520$202004110901$ICE  523$$1$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 2,
								"tLocX": 1,
								"fIdx": 5,
								"tIdx": 14,
								"tagL": [
									"RES_JNY_DTL"
								]
							}
						],
						"subscr": "F"
					},
					"resState": "N",
					"resRecommendation": "N"
				}
			],
			"ctxRecon": "¶HKI¶D$A=1@O=Köln Hbf@L=8000207@a=128@$A=1@O=Köln Messe/Deutz Gl.11-12@L=8073368@a=128@$202004110517$202004110520$$$1$§T$A=1@O=Köln Messe/Deutz Gl.11-12@L=8073368@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110520$202004110901$ICE  523$$1$",
			"trfRes": {
				"statusCode": "OK",
				"fareSetL": [
					{
						"fareL": [
							{
								"price": { "amount": 4990 },
								"isFromPrice": true,
								"isBookable": true,
								"isUpsell": false,
								"targetCtx": "D",
								"buttonText": "Continue to booking"
							}
						]
					}
				]
			},
			"conSubscr": "F",
			"resState": "N",
			"resRecommendation": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 2,
				"calcDate": "20200410",
				"jid": "1|301001|0|80|-1",
				"locMode": "FROM_START",
				"pLocX": 2,
				"reqMode": "UNKNOWN",
				"sectX": 1,
				"calcTime": "203323"
			},
			"cksum": "faac8940_3"
		}
	],
	"outCtxScrB": "1|OB|MT#11#172999#172999#173219#173219#0#0#5#172589#1#-2147482606#0#1#2|PDH#fbb83c5f2c5e367d766f8d0b4cc73c0a|RD#10042020|RT#202923",
	"outCtxScrF": "1|OF|MT#11#173120#173120#173341#173341#0#0#485#173063#3#-2147482606#0#1#2|PDH#fbb83c5f2c5e367d766f8d0b4cc73c0a|RD#10042020|RT#202923",
	"retCtxScrF": "1|OF|MT#11#173120#173120#173341#173341#0#0#485#173063#3#-2147482606#0#1#2|PDH#fbb83c5f2c5e367d766f8d0b4cc73c0a|RD#10042020|RT#202923",
	"fpB": "20191215",
	"fpE": "20201212",
	"bfATS": -1,
	"bfIOSTS": -1,
	"planrtTS": "1586543549"
}
const r2 : RawResult = 
{
	"common": {
		"locL": [
			{
				"lid": "A=1@O=München-Mittersendling@X=11536351@Y=48107823@U=80@L=8004154@",
				"type": "S",
				"name": "München-Mittersendling",
				"icoX": 0,
				"extId": "8004154",
				"state": "F",
				"crd": {
					"x": 11536306,
					"y": 48107418,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 24,
				"pRefL": [
					0,
					1,
					2,
					3,
					4,
					5
				]
			},
			{
				"lid": "A=1@O=Karl-Theodor-Straße, München@X=11574043@Y=48166918@U=80@L=621790@",
				"type": "S",
				"name": "Karl-Theodor-Straße, München",
				"icoX": 4,
				"extId": "621790",
				"state": "F",
				"crd": {
					"x": 11574043,
					"y": 48166918,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"pRefL": [
					6,
					7
				],
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Thalkirchen (Tierpark), München@X=11546015@Y=48102708@U=80@L=625236@",
				"type": "S",
				"name": "Thalkirchen (Tierpark), München",
				"icoX": 5,
				"extId": "625236",
				"state": "F",
				"crd": {
					"x": 11546015,
					"y": 48102708,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"pRefL": [
					8,
					9
				],
				"mMastLocX": 3
			},
			{
				"lid": "A=1@O=Thalkirchen (Tierpark), München@X=11546680@Y=48101009@U=80@L=625242@",
				"type": "S",
				"name": "Thalkirchen (Tierpark), München",
				"icoX": 5,
				"extId": "625242",
				"state": "F",
				"crd": {
					"x": 11546680,
					"y": 48101009,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"pRefL": [
					8
				]
			},
			{
				"lid": "A=1@O=Bonner Platz, München@X=11578151@Y=48166702@U=80@L=624333@",
				"type": "S",
				"name": "Bonner Platz, München",
				"icoX": 6,
				"extId": "624333",
				"state": "F",
				"crd": {
					"x": 11578151,
					"y": 48166702,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 128,
				"pRefL": [
					9
				],
				"mMastLocX": 5
			},
			{
				"lid": "A=1@O=Bonner Platz, München@X=11579347@Y=48167035@U=80@L=790754@",
				"type": "S",
				"name": "Bonner Platz, München",
				"icoX": 8,
				"extId": "790754",
				"state": "F",
				"crd": {
					"x": 11579347,
					"y": 48167035,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 128,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Brudermühlstraße, München@X=11548721@Y=48112596@U=80@L=624342@",
				"type": "S",
				"name": "Brudermühlstraße, München",
				"icoX": 5,
				"extId": "624342",
				"state": "F",
				"crd": {
					"x": 11548721,
					"y": 48112596,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"mMastLocX": 7
			},
			{
				"lid": "A=1@O=Brudermühlstraße, München@X=11548235@Y=48112209@U=80@L=624345@",
				"type": "S",
				"name": "Brudermühlstraße, München",
				"icoX": 5,
				"extId": "624345",
				"state": "F",
				"crd": {
					"x": 11548235,
					"y": 48112209,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Implerstraße, München@X=11548433@Y=48120138@U=80@L=624684@",
				"type": "S",
				"name": "Implerstraße, München",
				"icoX": 5,
				"extId": "624684",
				"state": "F",
				"crd": {
					"x": 11548433,
					"y": 48120138,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"mMastLocX": 9
			},
			{
				"lid": "A=1@O=Implerstraße, München@X=11548855@Y=48119392@U=80@L=624691@",
				"type": "S",
				"name": "Implerstraße, München",
				"icoX": 5,
				"extId": "624691",
				"state": "F",
				"crd": {
					"x": 11548855,
					"y": 48119392,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160
			},
			{
				"lid": "A=1@O=Poccistraße, München@X=11550357@Y=48125513@U=80@L=625095@",
				"type": "S",
				"name": "Poccistraße, München",
				"icoX": 5,
				"extId": "625095",
				"state": "F",
				"crd": {
					"x": 11550357,
					"y": 48125513,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Goetheplatz, München@X=11557422@Y=48129064@U=80@L=624535@",
				"type": "S",
				"name": "Goetheplatz, München",
				"icoX": 5,
				"extId": "624535",
				"state": "F",
				"crd": {
					"x": 11557422,
					"y": 48129064,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Sendlinger Tor, München@X=11566744@Y=48133406@U=80@L=625176@",
				"type": "S",
				"name": "Sendlinger Tor, München",
				"icoX": 5,
				"extId": "625176",
				"state": "F",
				"crd": {
					"x": 11566744,
					"y": 48133406,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Marienplatz, München@X=11576596@Y=48137829@U=80@L=624885@",
				"type": "S",
				"name": "Marienplatz, München",
				"icoX": 0,
				"extId": "624885",
				"state": "F",
				"crd": {
					"x": 11576596,
					"y": 48137829,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 184,
				"mMastLocX": 14
			},
			{
				"lid": "A=1@O=München Marienplatz@X=11575383@Y=48137047@U=80@L=8004135@",
				"type": "S",
				"name": "München Marienplatz",
				"icoX": 0,
				"extId": "8004135",
				"state": "F",
				"crd": {
					"x": 11575383,
					"y": 48137047,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 184
			},
			{
				"lid": "A=1@O=Odeonsplatz, München@X=11577980@Y=48143411@U=80@L=638143@",
				"type": "S",
				"name": "Odeonsplatz, München",
				"icoX": 0,
				"extId": "638143",
				"state": "F",
				"crd": {
					"x": 11577980,
					"y": 48143411,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 168,
				"mMastLocX": 16
			},
			{
				"lid": "A=1@O=München Odeonsplatz@X=11577819@Y=48142943@U=80@L=8070914@",
				"type": "S",
				"name": "München Odeonsplatz",
				"icoX": 0,
				"extId": "8070914",
				"state": "F",
				"crd": {
					"x": 11577819,
					"y": 48142943,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 168
			},
			{
				"lid": "A=1@O=Universität, München@X=11581001@Y=48150063@U=80@L=638611@",
				"type": "S",
				"name": "Universität, München",
				"icoX": 5,
				"extId": "638611",
				"state": "F",
				"crd": {
					"x": 11581001,
					"y": 48150063,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"mMastLocX": 18
			},
			{
				"lid": "A=1@O=Universität, München@X=11580048@Y=48148283@U=80@L=625286@",
				"type": "S",
				"name": "Universität, München",
				"icoX": 5,
				"extId": "625286",
				"state": "F",
				"crd": {
					"x": 11580048,
					"y": 48148283,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Giselastraße, München@X=11584003@Y=48156517@U=80@L=624521@",
				"type": "S",
				"name": "Giselastraße, München",
				"icoX": 5,
				"extId": "624521",
				"state": "F",
				"crd": {
					"x": 11584003,
					"y": 48156517,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"mMastLocX": 20
			},
			{
				"lid": "A=1@O=Giselastraße, München@X=11584803@Y=48157236@U=80@L=624526@",
				"type": "S",
				"name": "Giselastraße, München",
				"icoX": 5,
				"extId": "624526",
				"state": "F",
				"crd": {
					"x": 11584803,
					"y": 48157236,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Münchner Freiheit, München@X=11586331@Y=48161839@U=80@L=624950@",
				"type": "S",
				"name": "Münchner Freiheit, München",
				"icoX": 5,
				"extId": "624950",
				"state": "F",
				"crd": {
					"x": 11586331,
					"y": 48161839,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Adunistraße, München@X=11534356@Y=48109297@U=80@L=790090@",
				"type": "S",
				"name": "Adunistraße, München",
				"icoX": 5,
				"extId": "790090",
				"state": "F",
				"crd": {
					"x": 11534356,
					"y": 48109297,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"pRefL": [
					13,
					14
				],
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Pündterplatz, München@X=11576866@Y=48162603@U=80@L=622912@",
				"type": "S",
				"name": "Pündterplatz, München",
				"icoX": 5,
				"extId": "622912",
				"state": "F",
				"crd": {
					"x": 11576866,
					"y": 48162603,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"pRefL": [
					13,
					16,
					17
				]
			},
			{
				"lid": "A=1@O=Johann-Clanze-Straße, München@X=11533906@Y=48113054@U=80@L=790091@",
				"type": "S",
				"name": "Johann-Clanze-Straße, München",
				"icoX": 5,
				"extId": "790091",
				"state": "F",
				"crd": {
					"x": 11533906,
					"y": 48113054,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 25
			},
			{
				"lid": "A=1@O=Johann-Clanze-Straße, München@X=11533142@Y=48112830@U=80@L=790309@",
				"type": "S",
				"name": "Johann-Clanze-Straße, München",
				"icoX": 5,
				"extId": "790309",
				"state": "F",
				"crd": {
					"x": 11533142,
					"y": 48112830,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Harras, München@X=11536828@Y=48116785@U=80@L=623510@",
				"type": "S",
				"name": "Harras, München",
				"icoX": 0,
				"extId": "623510",
				"state": "F",
				"crd": {
					"x": 11536828,
					"y": 48116785,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 184,
				"mMastLocX": 27
			},
			{
				"lid": "A=1@O=München Harras@X=11536315@Y=48117747@U=80@L=8004130@",
				"type": "S",
				"name": "München Harras",
				"icoX": 0,
				"extId": "8004130",
				"state": "F",
				"crd": {
					"x": 11536315,
					"y": 48117747,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 184
			},
			{
				"lid": "A=1@O=Am Harras, München@X=11540190@Y=48117198@U=80@L=790082@",
				"type": "S",
				"name": "Am Harras, München",
				"icoX": 5,
				"extId": "790082",
				"state": "F",
				"crd": {
					"x": 11540190,
					"y": 48117198,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 29
			},
			{
				"lid": "A=1@O=Am Harras, München@X=11540046@Y=48116263@U=80@L=626017@",
				"type": "S",
				"name": "Am Harras, München",
				"icoX": 5,
				"extId": "626017",
				"state": "F",
				"crd": {
					"x": 11540046,
					"y": 48116263,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Margaretenplatz, München@X=11540873@Y=48120093@U=80@L=790083@",
				"type": "S",
				"name": "Margaretenplatz, München",
				"icoX": 5,
				"extId": "790083",
				"state": "F",
				"crd": {
					"x": 11540873,
					"y": 48120093,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 31
			},
			{
				"lid": "A=1@O=Margaretenplatz, München@X=11540567@Y=48119976@U=80@L=790074@",
				"type": "S",
				"name": "Margaretenplatz, München",
				"icoX": 5,
				"extId": "790074",
				"state": "F",
				"crd": {
					"x": 11540567,
					"y": 48119976,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Sendlinger Kirche, München@X=11541224@Y=48121900@U=80@L=790084@",
				"type": "S",
				"name": "Sendlinger Kirche, München",
				"icoX": 5,
				"extId": "790084",
				"state": "F",
				"crd": {
					"x": 11541224,
					"y": 48121900,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 33
			},
			{
				"lid": "A=1@O=Sendlinger Kirche, München@X=11541044@Y=48122080@U=80@L=790073@",
				"type": "S",
				"name": "Sendlinger Kirche, München",
				"icoX": 5,
				"extId": "790073",
				"state": "F",
				"crd": {
					"x": 11541044,
					"y": 48122080,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Herzog-Ernst-Platz, München@X=11540648@Y=48125720@U=80@L=626031@",
				"type": "S",
				"name": "Herzog-Ernst-Platz, München",
				"icoX": 5,
				"extId": "626031",
				"state": "F",
				"crd": {
					"x": 11540648,
					"y": 48125720,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Ganghoferbrücke, München@X=11539111@Y=48127931@U=80@L=621081@",
				"type": "S",
				"name": "Ganghoferbrücke, München",
				"icoX": 5,
				"extId": "621081",
				"state": "F",
				"crd": {
					"x": 11539111,
					"y": 48127931,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32
			},
			{
				"lid": "A=1@O=Ridlerstraße, München@X=11539390@Y=48131024@U=80@L=639101@",
				"type": "S",
				"name": "Ridlerstraße, München",
				"icoX": 5,
				"extId": "639101",
				"state": "F",
				"crd": {
					"x": 11539390,
					"y": 48131024,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 37
			},
			{
				"lid": "A=1@O=Ridlerstraße, München@X=11539246@Y=48130763@U=80@L=622234@",
				"type": "S",
				"name": "Ridlerstraße, München",
				"icoX": 5,
				"extId": "622234",
				"state": "F",
				"crd": {
					"x": 11539246,
					"y": 48130763,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Schwanthalerhöhe, München@X=11539830@Y=48133316@U=80@L=790085@",
				"type": "S",
				"name": "Schwanthalerhöhe, München",
				"icoX": 5,
				"extId": "790085",
				"state": "F",
				"crd": {
					"x": 11539830,
					"y": 48133316,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"mMastLocX": 39
			},
			{
				"lid": "A=1@O=Schwanthalerhöhe, München@X=11541008@Y=48133765@U=80@L=625167@",
				"type": "S",
				"name": "Schwanthalerhöhe, München",
				"icoX": 9,
				"extId": "625167",
				"state": "F",
				"crd": {
					"x": 11541008,
					"y": 48133765,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Bergmannstraße, München@X=11537403@Y=48134997@U=80@L=790086@",
				"type": "S",
				"name": "Bergmannstraße, München",
				"icoX": 5,
				"extId": "790086",
				"state": "F",
				"crd": {
					"x": 11537403,
					"y": 48134997,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 41
			},
			{
				"lid": "A=1@O=Bergmannstraße, München@X=11537394@Y=48134862@U=80@L=790070@",
				"type": "S",
				"name": "Bergmannstraße, München",
				"icoX": 5,
				"extId": "790070",
				"state": "F",
				"crd": {
					"x": 11537394,
					"y": 48134862,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Kazmairstraße, München@X=11534167@Y=48135258@U=80@L=625870@",
				"type": "S",
				"name": "Kazmairstraße, München",
				"icoX": 5,
				"extId": "625870",
				"state": "F",
				"crd": {
					"x": 11534167,
					"y": 48135258,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Gollierplatz, München@X=11534311@Y=48136300@U=80@L=621250@",
				"type": "S",
				"name": "Gollierplatz, München",
				"icoX": 5,
				"extId": "621250",
				"state": "F",
				"crd": {
					"x": 11534311,
					"y": 48136300,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32
			},
			{
				"lid": "A=1@O=Trappentreustraße, München@X=11534805@Y=48139707@U=80@L=624105@",
				"type": "S",
				"name": "Trappentreustraße, München",
				"icoX": 5,
				"extId": "624105",
				"state": "F",
				"crd": {
					"x": 11534805,
					"y": 48139707,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"mMastLocX": 45
			},
			{
				"lid": "A=1@O=Trappentreustraße, München@X=11533960@Y=48139438@U=80@L=625387@",
				"type": "S",
				"name": "Trappentreustraße, München",
				"icoX": 5,
				"extId": "625387",
				"state": "F",
				"crd": {
					"x": 11533960,
					"y": 48139438,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Donnersbergerbrücke, München@X=11534724@Y=48142656@U=80@L=624401@",
				"type": "S",
				"name": "Donnersbergerbrücke, München",
				"icoX": 0,
				"extId": "624401",
				"state": "F",
				"crd": {
					"x": 11534724,
					"y": 48142656,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 56,
				"mMastLocX": 47
			},
			{
				"lid": "A=1@O=München Donnersbergerbrücke@X=11536540@Y=48142620@U=80@L=8004128@",
				"type": "S",
				"name": "München Donnersbergerbrücke",
				"icoX": 0,
				"extId": "8004128",
				"state": "F",
				"crd": {
					"x": 11536540,
					"y": 48142620,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 56
			},
			{
				"lid": "A=1@O=Donnersbergerstraße, München@X=11536612@Y=48146728@U=80@L=624410@",
				"type": "S",
				"name": "Donnersbergerstraße, München",
				"icoX": 5,
				"extId": "624410",
				"state": "F",
				"crd": {
					"x": 11536612,
					"y": 48146728,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Schlörstraße, München@X=11537106@Y=48150081@U=80@L=623072@",
				"type": "S",
				"name": "Schlörstraße, München",
				"icoX": 5,
				"extId": "623072",
				"state": "F",
				"crd": {
					"x": 11537106,
					"y": 48150081,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32
			},
			{
				"lid": "A=1@O=Landshuter Allee, München@X=11536261@Y=48152005@U=80@L=626277@",
				"type": "S",
				"name": "Landshuter Allee, München",
				"icoX": 5,
				"extId": "626277",
				"state": "F",
				"crd": {
					"x": 11536261,
					"y": 48152005,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"mMastLocX": 51
			},
			{
				"lid": "A=1@O=Landshuter Allee, München@X=11536675@Y=48151474@U=80@L=626276@",
				"type": "S",
				"name": "Landshuter Allee, München",
				"icoX": 5,
				"extId": "626276",
				"state": "F",
				"crd": {
					"x": 11536675,
					"y": 48151474,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 32,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Rotkreuzplatz, München@X=11534248@Y=48153164@U=80@L=625145@",
				"type": "S",
				"name": "Rotkreuzplatz, München",
				"icoX": 5,
				"extId": "625145",
				"state": "F",
				"crd": {
					"x": 11534248,
					"y": 48153164,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"mMastLocX": 53
			},
			{
				"lid": "A=1@O=Rotkreuzplatz, München@X=11533978@Y=48152841@U=80@L=625146@",
				"type": "S",
				"name": "Rotkreuzplatz, München",
				"icoX": 5,
				"extId": "625146",
				"state": "F",
				"crd": {
					"x": 11533978,
					"y": 48152841,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Albrechtstraße, München@X=11540217@Y=48155546@U=80@L=620037@",
				"type": "S",
				"name": "Albrechtstraße, München",
				"icoX": 5,
				"extId": "620037",
				"state": "F",
				"crd": {
					"x": 11540217,
					"y": 48155546,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288
			},
			{
				"lid": "A=1@O=Fasaneriestraße, München@X=11543300@Y=48157182@U=80@L=638962@",
				"type": "S",
				"name": "Fasaneriestraße, München",
				"icoX": 5,
				"extId": "638962",
				"state": "F",
				"crd": {
					"x": 11543300,
					"y": 48157182,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"mMastLocX": 56
			},
			{
				"lid": "A=1@O=Fasaneriestraße, München@X=11543767@Y=48157524@U=80@L=620829@",
				"type": "S",
				"name": "Fasaneriestraße, München",
				"icoX": 5,
				"extId": "620829",
				"state": "F",
				"crd": {
					"x": 11543767,
					"y": 48157524,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288
			},
			{
				"lid": "A=1@O=Leonrodplatz, München@X=11547067@Y=48159277@U=80@L=624832@",
				"type": "S",
				"name": "Leonrodplatz, München",
				"icoX": 5,
				"extId": "624832",
				"state": "F",
				"crd": {
					"x": 11547067,
					"y": 48159277,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Infanteriestraße, München@X=11553611@Y=48161443@U=80@L=621695@",
				"type": "S",
				"name": "Infanteriestraße, München",
				"icoX": 5,
				"extId": "621695",
				"state": "F",
				"crd": {
					"x": 11553611,
					"y": 48161443,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288
			},
			{
				"lid": "A=1@O=Barbarastraße, München@X=11557602@Y=48161380@U=80@L=639100@",
				"type": "S",
				"name": "Barbarastraße, München",
				"icoX": 5,
				"extId": "639100",
				"state": "F",
				"crd": {
					"x": 11557602,
					"y": 48161380,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"mMastLocX": 60
			},
			{
				"lid": "A=1@O=Barbarastraße, München@X=11557602@Y=48161470@U=80@L=620282@",
				"type": "S",
				"name": "Barbarastraße, München",
				"icoX": 5,
				"extId": "620282",
				"state": "F",
				"crd": {
					"x": 11557602,
					"y": 48161470,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Nordbad, München@X=11564317@Y=48160877@U=80@L=625001@",
				"type": "S",
				"name": "Nordbad, München",
				"icoX": 5,
				"extId": "625001",
				"state": "F",
				"crd": {
					"x": 11564317,
					"y": 48160877,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"mMastLocX": 62
			},
			{
				"lid": "A=1@O=Nordbad, München@X=11563526@Y=48161254@U=80@L=625002@",
				"type": "S",
				"name": "Nordbad, München",
				"icoX": 4,
				"extId": "625002",
				"state": "F",
				"crd": {
					"x": 11563526,
					"y": 48161254,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Hohenzollernplatz, München@X=11568128@Y=48161174@U=80@L=638868@",
				"type": "S",
				"name": "Hohenzollernplatz, München",
				"icoX": 5,
				"extId": "638868",
				"state": "F",
				"crd": {
					"x": 11568128,
					"y": 48161174,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"mMastLocX": 64
			},
			{
				"lid": "A=1@O=Hohenzollernplatz, München@X=11568766@Y=48162351@U=80@L=624663@",
				"type": "S",
				"name": "Hohenzollernplatz, München",
				"icoX": 10,
				"extId": "624663",
				"state": "F",
				"crd": {
					"x": 11568766,
					"y": 48162351,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Kurfürstenplatz, München@X=11574070@Y=48160401@U=80@L=624793@",
				"type": "S",
				"name": "Kurfürstenplatz, München",
				"icoX": 5,
				"extId": "624793",
				"state": "F",
				"crd": {
					"x": 11574070,
					"y": 48160401,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"mMastLocX": 66
			},
			{
				"lid": "A=1@O=Kurfürstenplatz, München@X=11574088@Y=48160508@U=80@L=624795@",
				"type": "S",
				"name": "Kurfürstenplatz, München",
				"icoX": 5,
				"extId": "624795",
				"state": "F",
				"crd": {
					"x": 11574088,
					"y": 48160508,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=München Siemenswerke@X=11532801@Y=48094501@U=80@L=8004137@",
				"type": "S",
				"name": "München Siemenswerke",
				"icoX": 0,
				"extId": "8004137",
				"state": "F",
				"crd": {
					"x": 11532810,
					"y": 48094492,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 56,
				"pRefL": [
					20,
					0,
					1,
					2,
					3,
					4,
					5,
					21
				]
			},
			{
				"lid": "A=1@O=Obersendling, München@X=11536261@Y=48098357@U=80@L=625016@",
				"type": "S",
				"name": "Obersendling, München",
				"icoX": 5,
				"extId": "625016",
				"state": "F",
				"crd": {
					"x": 11536261,
					"y": 48098357,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"pRefL": [
					23,
					21,
					9
				],
				"mMastLocX": 69
			},
			{
				"lid": "A=1@O=Obersendling, München@X=11538023@Y=48098627@U=80@L=625021@",
				"type": "S",
				"name": "Obersendling, München",
				"icoX": 5,
				"extId": "625021",
				"state": "F",
				"crd": {
					"x": 11538023,
					"y": 48098627,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"pRefL": [
					23,
					21
				],
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Karl-Theodor-Straße, München@X=11574034@Y=48166900@U=80@L=638842@",
				"type": "S",
				"name": "Karl-Theodor-Straße, München",
				"icoX": 4,
				"extId": "638842",
				"state": "F",
				"crd": {
					"x": 11574034,
					"y": 48166900,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"pRefL": [
					6,
					7
				],
				"mMastLocX": 1
			},
			{
				"lid": "A=1@O=Harras, München@X=11537907@Y=48116893@U=80@L=624602@",
				"type": "S",
				"name": "Harras, München",
				"icoX": 0,
				"extId": "624602",
				"state": "F",
				"crd": {
					"x": 11537907,
					"y": 48116893,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 184,
				"pRefL": [
					20,
					0,
					1,
					3,
					4,
					13,
					31,
					32,
					33,
					23,
					34,
					14,
					35,
					36
				],
				"mMastLocX": 27
			},
			{
				"lid": "A=1@O=Sendlinger Tor, München@X=11566142@Y=48133703@U=80@L=624625@",
				"type": "S",
				"name": "Sendlinger Tor, München",
				"icoX": 5,
				"extId": "624625",
				"state": "F",
				"crd": {
					"x": 11566142,
					"y": 48133703,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"pRefL": [
					39,
					40,
					34,
					14,
					41,
					42,
					43,
					9,
					36,
					44,
					45,
					46,
					47,
					48,
					49,
					7,
					50,
					51,
					52,
					53,
					54,
					55,
					56,
					57
				],
				"mMastLocX": 12
			},
			{
				"lid": "A=1@O=Karlsplatz (Stachus), München@X=11565360@Y=48138638@U=80@L=624746@",
				"type": "S",
				"name": "Karlsplatz (Stachus), München",
				"icoX": 0,
				"extId": "624746",
				"state": "F",
				"crd": {
					"x": 11565360,
					"y": 48138638,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 440,
				"pRefL": [
					2,
					59,
					60,
					61,
					3,
					62,
					63,
					4,
					64,
					65,
					66,
					34,
					14,
					41,
					67,
					68,
					46,
					47,
					48,
					69,
					70,
					71,
					49,
					7,
					50,
					51,
					52,
					72,
					53,
					54,
					55,
					56,
					73,
					57
				],
				"mMastLocX": 74
			},
			{
				"lid": "A=1@O=München Karlsplatz@X=11565620@Y=48139456@U=80@L=8004132@",
				"type": "S",
				"name": "München Karlsplatz",
				"icoX": 0,
				"extId": "8004132",
				"state": "F",
				"crd": {
					"x": 11565620,
					"y": 48139456,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 440,
				"pRefL": [
					2,
					59,
					60,
					61,
					3,
					62,
					63,
					4,
					64
				]
			},
			{
				"lid": "A=1@O=Karlsplatz (Stachus), München@X=11565189@Y=48138503@U=80@L=624744@",
				"type": "S",
				"name": "Karlsplatz (Stachus), München",
				"icoX": 0,
				"extId": "624744",
				"state": "F",
				"crd": {
					"x": 11565189,
					"y": 48138503,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 440,
				"pRefL": [
					2,
					59,
					60,
					61,
					3,
					62,
					63,
					4,
					64,
					65,
					66,
					34,
					14,
					41,
					67,
					68,
					46,
					47,
					48,
					69,
					70,
					71,
					49,
					7,
					50,
					51,
					52,
					72,
					53,
					54,
					55,
					56,
					73,
					57
				],
				"mMastLocX": 74
			},
			{
				"lid": "A=1@O=Ottostraße, München@X=11567778@Y=48142350@U=80@L=637392@",
				"type": "S",
				"name": "Ottostraße, München",
				"icoX": 4,
				"extId": "637392",
				"state": "F",
				"crd": {
					"x": 11567778,
					"y": 48142350,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"mMastLocX": 77
			},
			{
				"lid": "A=1@O=Ottostraße, München@X=11567877@Y=48142503@U=80@L=622657@",
				"type": "S",
				"name": "Ottostraße, München",
				"icoX": 8,
				"extId": "622657",
				"state": "F",
				"crd": {
					"x": 11567877,
					"y": 48142503,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Karolinenplatz, München@X=11569701@Y=48145550@U=80@L=637306@",
				"type": "S",
				"name": "Karolinenplatz, München",
				"icoX": 4,
				"extId": "637306",
				"state": "F",
				"crd": {
					"x": 11569701,
					"y": 48145550,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"mMastLocX": 79
			},
			{
				"lid": "A=1@O=Karolinenplatz, München@X=11569854@Y=48145739@U=80@L=621834@",
				"type": "S",
				"name": "Karolinenplatz, München",
				"icoX": 8,
				"extId": "621834",
				"state": "F",
				"crd": {
					"x": 11569854,
					"y": 48145739,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Pinakotheken, München@X=11571877@Y=48148706@U=80@L=622753@",
				"type": "S",
				"name": "Pinakotheken, München",
				"icoX": 5,
				"extId": "622753",
				"state": "F",
				"crd": {
					"x": 11571877,
					"y": 48148706,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Schellingstraße, München@X=11573216@Y=48150809@U=80@L=625623@",
				"type": "S",
				"name": "Schellingstraße, München",
				"icoX": 5,
				"extId": "625623",
				"state": "F",
				"crd": {
					"x": 11573216,
					"y": 48150809,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Nordendstraße, München@X=11575410@Y=48154872@U=80@L=638853@",
				"type": "S",
				"name": "Nordendstraße, München",
				"icoX": 4,
				"extId": "638853",
				"state": "F",
				"crd": {
					"x": 11575410,
					"y": 48154872,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"mMastLocX": 83
			},
			{
				"lid": "A=1@O=Nordendstraße, München@X=11575445@Y=48154908@U=80@L=622468@",
				"type": "S",
				"name": "Nordendstraße, München",
				"icoX": 8,
				"extId": "622468",
				"state": "F",
				"crd": {
					"x": 11575445,
					"y": 48154908,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Elisabethplatz, München@X=11575077@Y=48157452@U=80@L=638854@",
				"type": "S",
				"name": "Elisabethplatz, München",
				"icoX": 4,
				"extId": "638854",
				"state": "F",
				"crd": {
					"x": 11575077,
					"y": 48157452,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256,
				"mMastLocX": 85
			},
			{
				"lid": "A=1@O=Elisabethplatz, München@X=11574852@Y=48157875@U=80@L=620696@",
				"type": "S",
				"name": "Elisabethplatz, München",
				"icoX": 4,
				"extId": "620696",
				"state": "F",
				"crd": {
					"x": 11574852,
					"y": 48157875,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256
			},
			{
				"lid": "A=1@O=Kurfürstenplatz, München@X=11574951@Y=48160014@U=80@L=636453@",
				"type": "S",
				"name": "Kurfürstenplatz, München",
				"icoX": 5,
				"extId": "636453",
				"state": "F",
				"crd": {
					"x": 11574951,
					"y": 48160014,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 288,
				"mMastLocX": 66
			},
			{
				"lid": "A=1@O=Clemensstraße, München@X=11574681@Y=48163268@U=80@L=620414@",
				"type": "S",
				"name": "Clemensstraße, München",
				"icoX": 4,
				"extId": "620414",
				"state": "F",
				"crd": {
					"x": 11574681,
					"y": 48163268,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 256
			},
			{
				"lid": "A=1@O=München Hbf (tief)@X=11560496@Y=48141173@U=80@L=8098263@",
				"type": "S",
				"name": "München Hbf (tief)",
				"icoX": 25,
				"extId": "8098263",
				"state": "F",
				"crd": {
					"x": 11560496,
					"y": 48141173,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 959,
				"pRefL": [
					77,
					78,
					79,
					80,
					81,
					82,
					83,
					84,
					85,
					86,
					20,
					0,
					1,
					87,
					88,
					2,
					89,
					90,
					59,
					60,
					61,
					3,
					62,
					63,
					4,
					64,
					91,
					92,
					93,
					65,
					66,
					94,
					95,
					42,
					43,
					67,
					68,
					44,
					45,
					46,
					96,
					48,
					69,
					70,
					71,
					50,
					53,
					54,
					55,
					73,
					97
				],
				"entry": true,
				"mMastLocX": 89
			},
			{
				"lid": "A=1@O=München Hbf@X=11558339@Y=48140229@U=80@L=8000261@",
				"type": "S",
				"name": "München Hbf",
				"icoX": 25,
				"extId": "8000261",
				"state": "F",
				"crd": {
					"x": 11558339,
					"y": 48140229,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 959,
				"pRefL": [
					78,
					79,
					80,
					81,
					82,
					83,
					84,
					85,
					86,
					87,
					88,
					2,
					89,
					60,
					61,
					97
				]
			},
			{
				"lid": "A=1@O=München Heimeranplatz@X=11531497@Y=48132965@U=80@L=8005419@",
				"type": "S",
				"name": "München Heimeranplatz",
				"icoX": 0,
				"extId": "8005419",
				"state": "F",
				"crd": {
					"x": 11531497,
					"y": 48132965,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 184
			},
			{
				"lid": "A=1@O=München Hackerbrücke@X=11548568@Y=48141973@U=80@L=8004129@",
				"type": "S",
				"name": "München Hackerbrücke",
				"icoX": 0,
				"extId": "8004129",
				"state": "F",
				"crd": {
					"x": 11548532,
					"y": 48141919,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 312
			},
			{
				"lid": "A=1@O=Hauptbahnhof, München@X=11561153@Y=48140049@U=80@L=624637@",
				"type": "S",
				"name": "Hauptbahnhof, München",
				"icoX": 25,
				"extId": "624637",
				"state": "F",
				"crd": {
					"x": 11561153,
					"y": 48140049,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 959,
				"pRefL": [
					77,
					78,
					79,
					80,
					81,
					82,
					83,
					84,
					85,
					86,
					20,
					0,
					1,
					87,
					88,
					2,
					89,
					90,
					59,
					60,
					61,
					3,
					62,
					63,
					4,
					64,
					91,
					92,
					93,
					65,
					66,
					94,
					95,
					42,
					43,
					67,
					68,
					44,
					45,
					46,
					96,
					48,
					69,
					70,
					71,
					50,
					53,
					54,
					55,
					73,
					97
				],
				"mMastLocX": 89
			},
			{
				"lid": "A=1@O=Scheidplatz, München@X=11572937@Y=48171547@U=80@L=624529@",
				"type": "S",
				"name": "Scheidplatz, München",
				"icoX": 5,
				"extId": "624529",
				"state": "F",
				"crd": {
					"x": 11572937,
					"y": 48171547,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"pRefL": [
					99,
					100,
					101,
					102,
					103,
					43,
					9,
					45,
					6,
					7
				],
				"mMastLocX": 94
			},
			{
				"lid": "A=1@O=Scheidplatz, München@X=11573081@Y=48171790@U=80@L=625160@",
				"type": "S",
				"name": "Scheidplatz, München",
				"icoX": 5,
				"extId": "625160",
				"state": "F",
				"crd": {
					"x": 11573081,
					"y": 48171790,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"pRefL": [
					99,
					100,
					102,
					103
				],
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Königsplatz, München@X=11563301@Y=48145128@U=80@L=624796@",
				"type": "S",
				"name": "Königsplatz, München",
				"icoX": 5,
				"extId": "624796",
				"state": "F",
				"crd": {
					"x": 11563301,
					"y": 48145128,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160
			},
			{
				"lid": "A=1@O=Theresienstraße, München@X=11564407@Y=48151420@U=80@L=625254@",
				"type": "S",
				"name": "Theresienstraße, München",
				"icoX": 10,
				"extId": "625254",
				"state": "F",
				"crd": {
					"x": 11564407,
					"y": 48151420,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 128
			},
			{
				"lid": "A=1@O=Josephsplatz, München@X=11567059@Y=48155654@U=80@L=624725@",
				"type": "S",
				"name": "Josephsplatz, München",
				"icoX": 5,
				"extId": "624725",
				"state": "F",
				"crd": {
					"x": 11567059,
					"y": 48155654,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 160,
				"isMainMast": true
			},
			{
				"lid": "A=1@O=Scheidplatz, München@X=11572937@Y=48171385@U=80@L=624388@",
				"type": "S",
				"name": "Scheidplatz, München",
				"icoX": 5,
				"extId": "624388",
				"state": "F",
				"crd": {
					"x": 11572937,
					"y": 48171385,
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 416,
				"pRefL": [
					99,
					100,
					101,
					102,
					103,
					43,
					9,
					45,
					6,
					7
				],
				"mMastLocX": 94
			}
		],
		"prodL": [
			{
				"name": "BRB",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "BRB",
					"line": "",
					"catOut": "DPN     ",
					"catOutS": "DPN",
					"catOutL": "Nahreisezug"
				}
			},
			{
				"name": "M",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "M  ",
					"line": "",
					"catOut": "DPN     ",
					"catOutS": "DPN",
					"catOutL": "Nahreisezug"
				}
			},
			{
				"pid": "L::3::Bus::B1146449194::3_B7_____SEV!!1285884!!5355465::*",
				"name": "Bus SEV",
				"nameS": "SEV",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "Bus SEV",
					"line": "SEV",
					"lineId": "3_B7_____SEV!!1285884!!5355465",
					"catOut": "Bus     ",
					"catOutS": "Bsv",
					"catOutL": "SEV-Bus"
				}
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_3::*",
				"name": "S 3",
				"nameS": "S 3",
				"icoX": 1,
				"cls": 16,
				"prodCtx": {
					"name": "S 3",
					"line": "3",
					"lineId": "4_800725_3",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1072472",
					"RIS_HIM_FREETEXT_1072473",
					"RIS_HIM_FREETEXT_1163477",
					"RIS_HIM_FREETEXT_1163478",
					"RIS_HIM_FREETEXT_1179605",
					"RIS_HIM_FREETEXT_1179600",
					"RIS_HIM_FREETEXT_1179608",
					"RIS_HIM_FREETEXT_1179607",
					"RIS_HIM_FREETEXT_1179602",
					"RIS_HIM_FREETEXT_1179599",
					"RIS_HIM_FREETEXT_1184673"
				]
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_7::*",
				"name": "S 7",
				"nameS": "S 7",
				"icoX": 2,
				"cls": 16,
				"prodCtx": {
					"name": "S 7",
					"line": "7",
					"lineId": "4_800725_7",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1184673",
					"RIS_HIM_FREETEXT_1186308"
				]
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_20::*",
				"name": "S 20",
				"nameS": "S 20",
				"icoX": 3,
				"cls": 16,
				"prodCtx": {
					"name": "S 20",
					"line": "20",
					"lineId": "4_800725_20",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_12::*",
				"name": "12",
				"nameS": "12",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "12",
					"line": "12",
					"lineId": "8_swm002_12",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "28",
					"line": "28",
					"lineId": "8_swm002_28",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_135::*",
				"name": "135",
				"nameS": "135",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "135",
					"line": "135",
					"lineId": "5_swm003_135",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_3::*",
				"name": "U 3",
				"nameS": "U 3",
				"icoX": 6,
				"cls": 128,
				"prodCtx": {
					"name": "U 3",
					"line": "3",
					"lineId": "7_swm001_3",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"name": "Walk",
				"icoX": 7,
				"prodCtx": {
					"name": "Walk"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_3::*",
				"name": "U 3",
				"nameS": "U 3",
				"number": "3",
				"icoX": 6,
				"cls": 128,
				"prodCtx": {
					"name": "U      3",
					"num": "3032",
					"line": "3",
					"matchId": "3",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_3::*",
				"name": "U 3",
				"nameS": "U 3",
				"number": "3",
				"icoX": 6,
				"cls": 128,
				"prodCtx": {
					"name": "U      3",
					"num": "3032",
					"line": "3",
					"lineId": "7_swm001_3",
					"matchId": "3",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_53::*",
				"name": "53",
				"nameS": "53",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "53",
					"line": "53",
					"lineId": "5_swm003_53",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_N41::*",
				"name": "N41",
				"nameS": "N41",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "N41",
					"line": "N41",
					"lineId": "5_swm003_N41",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_53::*",
				"name": "53",
				"nameS": "53",
				"number": "53",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "      53",
					"num": "23898",
					"line": "53",
					"matchId": "53",
					"catOut": "Bus",
					"catOutS": "Bus",
					"catOutL": "Bus",
					"catIn": "Bus",
					"catCode": "5",
					"admin": "swm003"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_59::*",
				"name": "59",
				"nameS": "59",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "59",
					"line": "59",
					"lineId": "5_swm003_59",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_N43::*",
				"name": "N43",
				"nameS": "N43",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "N43",
					"line": "N43",
					"lineId": "5_swm003_N43",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_53::*",
				"name": "53",
				"nameS": "53",
				"number": "53",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "      53",
					"num": "23898",
					"line": "53",
					"lineId": "5_swm003_53",
					"matchId": "53",
					"catOut": "Bus",
					"catOutS": "Bus",
					"catOutL": "Bus",
					"catIn": "Bus",
					"catCode": "5",
					"admin": "swm003"
				}
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_7::*",
				"name": "S 7",
				"nameS": "S 7",
				"number": "7",
				"icoX": 2,
				"cls": 16,
				"oprX": 0,
				"prodCtx": {
					"name": "S      7",
					"num": "6740",
					"line": "7",
					"matchId": "7",
					"catOut": "S",
					"catOutS": "s",
					"catOutL": "S-Bahn",
					"catIn": "s",
					"catCode": "4",
					"admin": "800725"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1184673",
					"RIS_HIM_FREETEXT_1186308"
				]
			},
			{
				"name": "BOB",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "BOB",
					"line": "",
					"catOut": "DPN     ",
					"catOutS": "DPN",
					"catOutL": "Nahreisezug"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_136::*",
				"name": "136",
				"nameS": "136",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "136",
					"line": "136",
					"lineId": "5_swm003_136",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_7::*",
				"name": "S 7",
				"nameS": "S 7",
				"number": "7",
				"icoX": 2,
				"cls": 16,
				"oprX": 0,
				"prodCtx": {
					"name": "S      7",
					"num": "6740",
					"line": "7",
					"lineId": "4_800725_7",
					"matchId": "7",
					"catOut": "S",
					"catOutS": "s",
					"catOutL": "S-Bahn",
					"catIn": "s",
					"catCode": "4",
					"admin": "800725"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1184673",
					"RIS_HIM_FREETEXT_1186308"
				]
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_134::*",
				"name": "134",
				"nameS": "134",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "134",
					"line": "134",
					"lineId": "5_swm003_134",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_3::*",
				"name": "U 3",
				"nameS": "U 3",
				"number": "3",
				"icoX": 6,
				"cls": 128,
				"prodCtx": {
					"name": "U      3",
					"num": "3033",
					"line": "3",
					"matchId": "3",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_3::*",
				"name": "U 3",
				"nameS": "U 3",
				"number": "3",
				"icoX": 6,
				"cls": 128,
				"prodCtx": {
					"name": "U      3",
					"num": "3033",
					"line": "3",
					"lineId": "7_swm001_3",
					"matchId": "3",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_53::*",
				"name": "53",
				"nameS": "53",
				"number": "53",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "      53",
					"num": "23900",
					"line": "53",
					"matchId": "53",
					"catOut": "Bus",
					"catOutS": "Bus",
					"catOutL": "Bus",
					"catIn": "Bus",
					"catCode": "5",
					"admin": "swm003"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_53::*",
				"name": "53",
				"nameS": "53",
				"number": "53",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "      53",
					"num": "23900",
					"line": "53",
					"lineId": "5_swm003_53",
					"matchId": "53",
					"catOut": "Bus",
					"catOutS": "Bus",
					"catOutL": "Bus",
					"catIn": "Bus",
					"catCode": "5",
					"admin": "swm003"
				}
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_7::*",
				"name": "S 7",
				"nameS": "S 7",
				"number": "7",
				"icoX": 2,
				"cls": 16,
				"oprX": 0,
				"prodCtx": {
					"name": "S      7",
					"num": "6745",
					"line": "7",
					"matchId": "7",
					"catOut": "S",
					"catOutS": "s",
					"catOutL": "S-Bahn",
					"catIn": "s",
					"catCode": "4",
					"admin": "800725"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1184673",
					"RIS_HIM_FREETEXT_1186308"
				]
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"number": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      28",
					"num": "15820",
					"line": "28",
					"matchId": "28",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_7::*",
				"name": "S 7",
				"nameS": "S 7",
				"number": "7",
				"icoX": 2,
				"cls": 16,
				"oprX": 0,
				"prodCtx": {
					"name": "S      7",
					"num": "6745",
					"line": "7",
					"lineId": "4_800725_7",
					"matchId": "7",
					"catOut": "S",
					"catOutS": "s",
					"catOutL": "S-Bahn",
					"catIn": "s",
					"catCode": "4",
					"admin": "800725"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1184673",
					"RIS_HIM_FREETEXT_1186308"
				]
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_54::*",
				"name": "54",
				"nameS": "54",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "54",
					"line": "54",
					"lineId": "5_swm003_54",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_130::*",
				"name": "130",
				"nameS": "130",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "130",
					"line": "130",
					"lineId": "5_swm003_130",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_132::*",
				"name": "132",
				"nameS": "132",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "132",
					"line": "132",
					"lineId": "5_swm003_132",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_N40::*",
				"name": "N40",
				"nameS": "N40",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "N40",
					"line": "N40",
					"lineId": "5_swm003_N40",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm_18_X30::*",
				"name": "X30",
				"nameS": "X30",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "X30",
					"line": "X30",
					"lineId": "5_swm_18_X30",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_6::*",
				"name": "U 6",
				"nameS": "U 6",
				"icoX": 15,
				"cls": 128,
				"prodCtx": {
					"name": "U 6",
					"line": "6",
					"lineId": "7_swm001_6",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_6::*",
				"name": "U 6",
				"nameS": "U 6",
				"number": "6",
				"icoX": 15,
				"cls": 128,
				"prodCtx": {
					"name": "U      6",
					"num": "5819",
					"line": "6",
					"matchId": "6",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_6::*",
				"name": "U 6",
				"nameS": "U 6",
				"number": "6",
				"icoX": 15,
				"cls": 128,
				"prodCtx": {
					"name": "U      6",
					"num": "5819",
					"line": "6",
					"lineId": "7_swm001_6",
					"matchId": "6",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_52::*",
				"name": "52",
				"nameS": "52",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "52",
					"line": "52",
					"lineId": "5_swm003_52",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_62::*",
				"name": "62",
				"nameS": "62",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "62",
					"line": "62",
					"lineId": "5_swm003_62",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_N45::*",
				"name": "N45",
				"nameS": "N45",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "N45",
					"line": "N45",
					"lineId": "5_swm003_N45",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_1::*",
				"name": "U 1",
				"nameS": "U 1",
				"icoX": 16,
				"cls": 128,
				"prodCtx": {
					"name": "U 1",
					"line": "1",
					"lineId": "7_swm001_1",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_2::*",
				"name": "U 2",
				"nameS": "U 2",
				"icoX": 10,
				"cls": 128,
				"prodCtx": {
					"name": "U 2",
					"line": "2",
					"lineId": "7_swm001_2",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_7::*",
				"name": "U 7",
				"nameS": "U 7",
				"icoX": 16,
				"cls": 128,
				"prodCtx": {
					"name": "U 7",
					"line": "7",
					"lineId": "7_swm001_7",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_8::*",
				"name": "U 8",
				"nameS": "U 8",
				"icoX": 17,
				"cls": 128,
				"prodCtx": {
					"name": "U 8",
					"line": "8",
					"lineId": "7_swm001_8",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_16::*",
				"name": "16",
				"nameS": "16",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "16",
					"line": "16",
					"lineId": "8_swm002_16",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_17!!1286563!!5355141::*",
				"name": "17",
				"nameS": "17",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "17",
					"line": "17",
					"lineId": "8_swm002_17!!1286563!!5355141",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_18::*",
				"name": "18",
				"nameS": "18",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "18",
					"line": "18",
					"lineId": "8_swm002_18",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_27::*",
				"name": "27",
				"nameS": "27",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "27",
					"line": "27",
					"lineId": "8_swm002_27",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_29::*",
				"name": "29",
				"nameS": "29",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "29",
					"line": "29",
					"lineId": "8_swm002_29",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_31::*",
				"name": "31",
				"nameS": "31",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "31",
					"line": "31",
					"lineId": "8_swm002_31",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_37::*",
				"name": "37",
				"nameS": "37",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "37",
					"line": "37",
					"lineId": "8_swm002_37",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_N17::*",
				"name": "N17",
				"nameS": "N17",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "N17",
					"line": "N17",
					"lineId": "8_swm002_N17",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_N19::*",
				"name": "N19",
				"nameS": "N19",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "N19",
					"line": "N19",
					"lineId": "8_swm002_N19",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_N20::*",
				"name": "N20",
				"nameS": "N20",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "N20",
					"line": "N20",
					"lineId": "8_swm002_N20",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_N27::*",
				"name": "N27",
				"nameS": "N27",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "N27",
					"line": "N27",
					"lineId": "8_swm002_N27",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_SEVU2::*",
				"name": "SEVU2",
				"nameS": "SEVU2",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "SEVU2",
					"line": "SEVU2",
					"lineId": "8_swm002_SEVU2",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_29::*",
				"name": "29",
				"nameS": "29",
				"number": "29",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      29",
					"num": "16282",
					"line": "29",
					"matchId": "29",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"name": "S",
				"nameS": "S",
				"icoX": 18,
				"cls": 16,
				"prodCtx": {
					"name": "S       ",
					"line": "",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				}
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_1::*",
				"name": "S 1",
				"nameS": "S 1",
				"icoX": 19,
				"cls": 16,
				"prodCtx": {
					"name": "S 1",
					"line": "1",
					"lineId": "4_800725_1",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1179605",
					"RIS_HIM_FREETEXT_1179600",
					"RIS_HIM_FREETEXT_1179608",
					"RIS_HIM_FREETEXT_1179607",
					"RIS_HIM_FREETEXT_1179602",
					"RIS_HIM_FREETEXT_1179599",
					"RIS_HIM_FREETEXT_1184948",
					"RIS_HIM_FREETEXT_1184954"
				]
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_2::*",
				"name": "S 2",
				"nameS": "S 2",
				"icoX": 20,
				"cls": 16,
				"prodCtx": {
					"name": "S 2",
					"line": "2",
					"lineId": "4_800725_2",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1159178",
					"RIS_HIM_FREETEXT_1179605",
					"RIS_HIM_FREETEXT_1179600",
					"RIS_HIM_FREETEXT_1179608",
					"RIS_HIM_FREETEXT_1179607",
					"RIS_HIM_FREETEXT_1179602",
					"RIS_HIM_FREETEXT_1179599",
					"RIS_HIM_FREETEXT_1179628",
					"RIS_HIM_FREETEXT_1186304"
				]
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_4::*",
				"name": "S 4",
				"nameS": "S 4",
				"icoX": 21,
				"cls": 16,
				"prodCtx": {
					"name": "S 4",
					"line": "4",
					"lineId": "4_800725_4",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1179605",
					"RIS_HIM_FREETEXT_1179600",
					"RIS_HIM_FREETEXT_1179608",
					"RIS_HIM_FREETEXT_1179607",
					"RIS_HIM_FREETEXT_1179602",
					"RIS_HIM_FREETEXT_1179599",
					"RIS_HIM_FREETEXT_1183479",
					"RIS_HIM_FREETEXT_1185509",
					"RIS_HIM_FREETEXT_1179628"
				]
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_6::*",
				"name": "S 6",
				"nameS": "S 6",
				"icoX": 22,
				"cls": 16,
				"prodCtx": {
					"name": "S 6",
					"line": "6",
					"lineId": "4_800725_6",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1159180",
					"RIS_HIM_FREETEXT_1163468",
					"RIS_HIM_FREETEXT_1163469",
					"RIS_HIM_FREETEXT_1174654",
					"RIS_HIM_FREETEXT_1175966",
					"RIS_HIM_FREETEXT_1179605",
					"RIS_HIM_FREETEXT_1179600",
					"RIS_HIM_FREETEXT_1179608",
					"RIS_HIM_FREETEXT_1179607",
					"RIS_HIM_FREETEXT_1179602",
					"RIS_HIM_FREETEXT_1179599",
					"RIS_HIM_FREETEXT_1183480",
					"RIS_HIM_FREETEXT_1179628",
					"RIS_HIM_FREETEXT_1186299"
				]
			},
			{
				"pid": "L::4::S::B0016128115::4_800725_8::*",
				"name": "S 8",
				"nameS": "S 8",
				"icoX": 23,
				"cls": 16,
				"prodCtx": {
					"name": "S 8",
					"line": "8",
					"lineId": "4_800725_8",
					"catOut": "S       ",
					"catOutS": "s",
					"catOutL": "S-Bahn"
				},
				"himIdL": [
					"RIS_HIM_FREETEXT_1138462",
					"RIS_HIM_FREETEXT_1150260",
					"RIS_HIM_FREETEXT_1159169",
					"RIS_HIM_FREETEXT_1159171",
					"RIS_HIM_FREETEXT_1159175",
					"RIS_HIM_FREETEXT_1159181",
					"RIS_HIM_FREETEXT_1159182",
					"RIS_HIM_FREETEXT_1159195",
					"RIS_HIM_FREETEXT_1159199",
					"RIS_HIM_FREETEXT_1159203",
					"RIS_HIM_FREETEXT_1159274",
					"RIS_HIM_FREETEXT_1159288",
					"RIS_HIM_FREETEXT_1159291",
					"RIS_HIM_FREETEXT_1159293",
					"RIS_HIM_FREETEXT_1172180",
					"RIS_HIM_FREETEXT_1179605",
					"RIS_HIM_FREETEXT_1179600",
					"RIS_HIM_FREETEXT_1179608",
					"RIS_HIM_FREETEXT_1179607",
					"RIS_HIM_FREETEXT_1179602",
					"RIS_HIM_FREETEXT_1179599",
					"RIS_HIM_FREETEXT_1184942",
					"RIS_HIM_FREETEXT_1179628",
					"RIS_HIM_FREETEXT_1186299"
				]
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm_12_717::*",
				"name": "717",
				"nameS": "717",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "717",
					"line": "717",
					"lineId": "5_swm_12_717",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm_12_720::*",
				"name": "720",
				"nameS": "720",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "720",
					"line": "720",
					"lineId": "5_swm_12_720",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_4::*",
				"name": "U 4",
				"nameS": "U 4",
				"icoX": 9,
				"cls": 128,
				"prodCtx": {
					"name": "U 4",
					"line": "4",
					"lineId": "7_swm001_4",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_5::*",
				"name": "U 5",
				"nameS": "U 5",
				"icoX": 24,
				"cls": 128,
				"prodCtx": {
					"name": "U 5",
					"line": "5",
					"lineId": "7_swm001_5",
					"catOut": "U       ",
					"catOutS": "U",
					"catOutL": "U-Bahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_19::*",
				"name": "19",
				"nameS": "19",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "19",
					"line": "19",
					"lineId": "8_swm002_19",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_20::*",
				"name": "20",
				"nameS": "20",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "20",
					"line": "20",
					"lineId": "8_swm002_20",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_21::*",
				"name": "21",
				"nameS": "21",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "21",
					"line": "21",
					"lineId": "8_swm002_21",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_39::*",
				"name": "39",
				"nameS": "39",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "39",
					"line": "39",
					"lineId": "8_swm002_39",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_N39::*",
				"name": "N39",
				"nameS": "N39",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "N39",
					"line": "N39",
					"lineId": "8_swm002_N39",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_29::*",
				"name": "29",
				"nameS": "29",
				"number": "29",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      29",
					"num": "16282",
					"line": "29",
					"lineId": "8_swm002_29",
					"matchId": "29",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"number": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      28",
					"num": "15820",
					"line": "28",
					"lineId": "8_swm002_28",
					"matchId": "28",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"number": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      28",
					"num": "15696",
					"line": "28",
					"matchId": "28",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"name": "ECE",
				"icoX": 25,
				"cls": 1,
				"prodCtx": {
					"name": "ECE     ",
					"line": "",
					"catOut": "ECE     ",
					"catOutS": "ECE",
					"catOutL": "Eurocity-Express"
				}
			},
			{
				"name": "ICE",
				"icoX": 25,
				"cls": 1,
				"prodCtx": {
					"name": "ICE     ",
					"line": "",
					"catOut": "ICE     ",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express"
				}
			},
			{
				"name": "RJ",
				"icoX": 25,
				"cls": 1,
				"prodCtx": {
					"name": "RJ      ",
					"line": "",
					"catOut": "RJ      ",
					"catOutS": "RJ",
					"catOutL": "railjet"
				}
			},
			{
				"name": "RJX",
				"icoX": 25,
				"cls": 1,
				"prodCtx": {
					"name": "RJX     ",
					"line": "",
					"catOut": "RJX     ",
					"catOutS": "RJX",
					"catOutL": "railjet xpress"
				}
			},
			{
				"name": "TGV",
				"icoX": 25,
				"cls": 1,
				"prodCtx": {
					"name": "TGV     ",
					"line": "",
					"catOut": "TGV     ",
					"catOutS": "RHT",
					"catOutL": "TGV INOUI"
				}
			},
			{
				"name": "EC",
				"icoX": 26,
				"cls": 2,
				"prodCtx": {
					"name": "EC      ",
					"line": "",
					"catOut": "EC      ",
					"catOutS": "EC",
					"catOutL": "Eurocity"
				}
			},
			{
				"name": "IC",
				"icoX": 26,
				"cls": 2,
				"prodCtx": {
					"name": "IC      ",
					"line": "",
					"catOut": "IC      ",
					"catOutS": "IC",
					"catOutL": "Intercity"
				}
			},
			{
				"name": "NJ",
				"icoX": 26,
				"cls": 2,
				"prodCtx": {
					"name": "NJ      ",
					"line": "",
					"catOut": "NJ      ",
					"catOutS": "NJ",
					"catOutL": "Nightjet"
				}
			},
			{
				"name": "EN",
				"icoX": 27,
				"cls": 4,
				"prodCtx": {
					"name": "EN      ",
					"line": "",
					"catOut": "EN      ",
					"catOutS": "EN",
					"catOutL": "EuroNight"
				}
			},
			{
				"name": "ALX",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "ALX",
					"line": "",
					"catOut": "DPN     ",
					"catOutS": "DPN",
					"catOutL": "Nahreisezug"
				}
			},
			{
				"name": "RB",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "RB      ",
					"line": "",
					"catOut": "RB      ",
					"catOutS": "RB",
					"catOutL": "Regionalbahn"
				}
			},
			{
				"name": "RE",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "RE      ",
					"line": "",
					"catOut": "RE      ",
					"catOutS": "RE",
					"catOutL": "Regional-Express"
				}
			},
			{
				"pid": "L::3::Bus::B0723754675::3_A8N____SEV::*",
				"name": "Bus SEV",
				"nameS": "SEV",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "Bus SEV",
					"line": "SEV",
					"lineId": "3_A8N____SEV",
					"catOut": "Bus     ",
					"catOutS": "Bsv",
					"catOutL": "SEV-Bus"
				}
			},
			{
				"pid": "L::3::Bus::B1146449194::3_B7_____SEV::*",
				"name": "Bus SEV",
				"nameS": "SEV",
				"icoX": 0,
				"cls": 8,
				"prodCtx": {
					"name": "Bus SEV",
					"line": "SEV",
					"lineId": "3_B7_____SEV",
					"catOut": "Bus     ",
					"catOutS": "Bsv",
					"catOutL": "SEV-Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_58::*",
				"name": "58",
				"nameS": "58",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "58",
					"line": "58",
					"lineId": "5_swm003_58",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_68::*",
				"name": "68",
				"nameS": "68",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "68",
					"line": "68",
					"lineId": "5_swm003_68",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_100::*",
				"name": "100",
				"nameS": "100",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "100",
					"line": "100",
					"lineId": "5_swm003_100",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_mvvEBU_LHMUC::*",
				"name": "LHMUC",
				"nameS": "LHMUC",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "LHMUC",
					"line": "LHMUC",
					"lineId": "5_mvvEBU_LHMUC",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm_18_X98::*",
				"name": "X98",
				"nameS": "X98",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "X98",
					"line": "X98",
					"lineId": "5_swm_18_X98",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_17!!1285889!!5355225::*",
				"name": "17",
				"nameS": "17",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "17",
					"line": "17",
					"lineId": "8_swm002_17!!1285889!!5355225",
					"catOut": "STR     ",
					"catOutS": "STR",
					"catOutL": "Straenbahn"
				}
			},
			{
				"pid": "L::9::AST::B0723754675::9_A8N____SEV::*",
				"name": "AST SEV",
				"nameS": "SEV",
				"icoX": 28,
				"cls": 512,
				"prodCtx": {
					"name": "AST SEV",
					"line": "SEV",
					"lineId": "9_A8N____SEV",
					"catOut": "AST     ",
					"catOutS": "ast",
					"catOutL": "Anruf-Sammel-Taxi"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_2::*",
				"name": "U 2",
				"nameS": "U 2",
				"number": "2",
				"icoX": 10,
				"cls": 128,
				"prodCtx": {
					"name": "U      2",
					"num": "2062",
					"line": "2",
					"matchId": "2",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_140::*",
				"name": "140",
				"nameS": "140",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "140",
					"line": "140",
					"lineId": "5_swm003_140",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_141::*",
				"name": "141",
				"nameS": "141",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "141",
					"line": "141",
					"lineId": "5_swm003_141",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_142::*",
				"name": "142",
				"nameS": "142",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "142",
					"line": "142",
					"lineId": "5_swm003_142",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm003_144::*",
				"name": "144",
				"nameS": "144",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "144",
					"line": "144",
					"lineId": "5_swm003_144",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::5::Bus::B1146449194::5_swm_12_U3::*",
				"name": "U3",
				"nameS": "U3",
				"icoX": 5,
				"cls": 32,
				"prodCtx": {
					"name": "U3",
					"line": "U3",
					"lineId": "5_swm_12_U3",
					"catOut": "Bus     ",
					"catOutS": "Bus",
					"catOutL": "Bus"
				}
			},
			{
				"pid": "L::7::U::B1146449194::7_swm001_2::*",
				"name": "U 2",
				"nameS": "U 2",
				"number": "2",
				"icoX": 10,
				"cls": 128,
				"prodCtx": {
					"name": "U      2",
					"num": "2062",
					"line": "2",
					"lineId": "7_swm001_2",
					"matchId": "2",
					"catOut": "U",
					"catOutS": "U",
					"catOutL": "U-Bahn",
					"catIn": "U",
					"catCode": "7",
					"admin": "swm001"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"number": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      28",
					"num": "15696",
					"line": "28",
					"lineId": "8_swm002_28",
					"matchId": "28",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"number": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      28",
					"num": "15821",
					"line": "28",
					"matchId": "28",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			},
			{
				"pid": "L::8::STR::B1146449194::8_swm002_28::*",
				"name": "28",
				"nameS": "28",
				"number": "28",
				"icoX": 4,
				"cls": 256,
				"prodCtx": {
					"name": "      28",
					"num": "15821",
					"line": "28",
					"lineId": "8_swm002_28",
					"matchId": "28",
					"catOut": "STR",
					"catOutS": "STR",
					"catOutL": "Straenbahn",
					"catIn": "STR",
					"catCode": "8",
					"admin": "swm002"
				}
			}
		],
		"polyL": [],
		"layerL": [
			{
				"id": "standard",
				"name": "standard",
				"index": 0,
				"annoCnt": 0
			}
		],
		"crdSysL": [
			{
				"id": "standard",
				"index": 0,
				"type": "WGS84"
			}
		],
		"opL": [
			{
				"name": "DB Regio AG Bayern",
				"icoX": 11
			}
		],
		"remL": [
			{
				"type": "A",
				"code": "PB",
				"prio": 200,
				"icoX": 12,
				"txtN": "Obligation to cover nose and mouth"
			},
			{
				"type": "A",
				"code": "FB",
				"prio": 260,
				"icoX": 13,
				"txtN": "Number of bicycles conveyed limited"
			},
			{
				"type": "A",
				"code": "FS",
				"prio": 260,
				"icoX": 12,
				"txtN": "conveying bicycles: mind the excluded times"
			},
			{
				"type": "A",
				"code": "K2",
				"prio": 300,
				"icoX": 14,
				"txtN": "2nd class only"
			},
			{
				"type": "A",
				"code": "XK",
				"prio": 100,
				"icoX": 12,
				"txtN": "walking distance 500 m"
			}
		],
		"icoL": [
			{
				"res": "prod_reg",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 89,
					"g": 87,
					"b": 87
				}
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 148,
					"g": 27,
					"b": 128
				},
				"shp": "C"
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 136,
					"g": 46,
					"b": 35
				},
				"shp": "C"
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 233,
					"g": 81,
					"b": 109
				},
				"shp": "C"
			},
			{
				"res": "prod_tram_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 227,
					"g": 6,
					"b": 19
				}
			},
			{
				"res": "prod_bus",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 0,
					"g": 93,
					"b": 137
				}
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 237,
					"g": 114,
					"b": 3
				}
			},
			{
				"res": "prod_walk",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 255,
					"g": 204,
					"b": 17
				}
			},
			{
				"res": "STA"
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 0,
					"g": 168,
					"b": 131
				}
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 193,
					"g": 8,
					"b": 48
				}
			},
			{
				"res": "RE",
				"txt": "DB Regio AG Bayern"
			},
			{
				"res": "attr_info"
			},
			{
				"res": "attr_bike"
			},
			{
				"res": "attr_2nd"
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 0,
					"g": 101,
					"b": 173
				}
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 82,
					"g": 129,
					"b": 46
				}
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 187,
					"g": 14,
					"b": 38
				}
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 76,
					"g": 144,
					"b": 70
				}
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 18,
					"g": 185,
					"b": 230
				},
				"shp": "C"
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 118,
					"g": 183,
					"b": 42
				},
				"shp": "C"
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 226,
					"g": 5,
					"b": 27
				},
				"shp": "C"
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 0,
					"g": 140,
					"b": 88
				},
				"shp": "C"
			},
			{
				"res": "prod_comm_t",
				"fg": {
					"r": 255,
					"g": 203,
					"b": 0
				},
				"bg": {
					"r": 29,
					"g": 29,
					"b": 27
				},
				"shp": "C"
			},
			{
				"res": "prod_sub_t",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 187,
					"g": 122,
					"b": 0
				}
			},
			{
				"res": "prod_ice",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 89,
					"g": 87,
					"b": 87
				}
			},
			{
				"res": "prod_ic",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 89,
					"g": 87,
					"b": 87
				}
			},
			{
				"res": "prod_gen",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 89,
					"g": 87,
					"b": 87
				}
			},
			{
				"res": "prod_taxi",
				"fg": {
					"r": 255,
					"g": 255,
					"b": 255
				},
				"bg": {
					"r": 255,
					"g": 203,
					"b": 20
				}
			},
			{
				"res": "pt_only"
			}
		]
	},
	"outConL": [
		{
			"cid": "C-0",
			"date": "20201116",
			"dur": "003700",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 15. Nov until 12. Dec 2020 ",
				"sDaysB": "FF0000000000000000000000000000000000000000000000000000000000000000000000000000003FFFFFFFFFF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"dInR": true,
				"dTimeS": "100100",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"aOutR": true,
				"aTimeS": "103800",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 0,
						"dInR": true,
						"dTimeS": "100100",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 2,
						"aOutR": true,
						"aTimeS": "101600",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 1201,
						"durS": "001500",
						"ctx": "G|1|G@F|A=1@O=München-Mittersendling@X=11536351@Y=48107823@U=80@L=8004154@|A=1@O=Thalkirchen (Tierpark), München@X=11546015@Y=48102708@U=80@L=625236@|16112020|100100|101600|bf|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 6,
					"dep": {
						"locX": 2,
						"idx": 6,
						"dProdX": 11,
						"dInR": true,
						"dTimeS": "101600",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 4,
						"idx": 17,
						"aOutR": true,
						"aTimeS": "103300",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|24525|9|80|16112020",
						"prodX": 12,
						"dirTxt": "Moosach, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 2,
								"idx": 6,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "101600",
								"dDirTxt": "Moosach, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 6,
								"idx": 7,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "101800",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "101800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 8,
								"idx": 8,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102000",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 10,
								"idx": 9,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102100",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 11,
								"idx": 10,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 12,
								"idx": 11,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102400",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 13,
								"idx": 12,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102600",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 15,
								"idx": 13,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102700",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 17,
								"idx": 14,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102900",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 19,
								"idx": 15,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "103000",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "103000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 21,
								"idx": 16,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "103100",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "103100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 4,
								"idx": 17,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "103300",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Thalkirchen (Tierpark), München@L=625236@a=128@$A=1@O=Bonner Platz, München@L=624333@a=128@$202011161016$202011161033$U      3$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 12,
								"fLocX": 2,
								"tLocX": 4,
								"fIdx": 6,
								"tIdx": 17
							}
						]
					},
					"minChg": "000500"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 4,
						"dInR": true,
						"dTimeS": "103300",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"aOutR": true,
						"aTimeS": "103800",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 353,
						"durS": "000500",
						"ctx": "G|1|G@F|A=1@O=Bonner Platz, München@X=11578151@Y=48166702@U=80@L=624333@|A=1@O=Karl-Theodor-Straße, München@X=11574043@Y=48166918@U=80@L=621790@|16112020|103300|103800|fb|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				}
			],
			"ctxRecon": "¶HKI¶G@F$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=Thalkirchen (Tierpark), München@L=625236@a=128@$202011161001$202011161016$$$1$$$§T$A=1@O=Thalkirchen (Tierpark), München@L=625236@a=128@$A=1@O=Bonner Platz, München@L=624333@a=128@$202011161016$202011161033$U      3$$1$$$§G@F$A=1@O=Bonner Platz, München@L=624333@a=128@$A=1@O=Karl-Theodor-Straße, München@L=621790@a=128@$202011161033$202011161038$$$1$$$¶GP¶ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§",
			"freq": {
				"minC": 10
			},
			"conSubscr": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"calcDate": "20201115",
				"locMode": "FROM_START",
				"reqMode": "UNKNOWN",
				"calcTime": "143055"
			},
			"cksum": "70d844fe_3",
			"cksumDti": "15d623ad_3"
		},
		{
			"cid": "C-1",
			"date": "20201116",
			"dur": "005900",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 16. Nov until 12. Dec 2020 Mo - Sa ",
				"sDaysB": "7E8DB9F7EFDFBF7EFDFBF7EFDFBF7A7DFBD7EFDDBF3EEDFBF7EFDFBF7EFDF3F7EFDFBF7EF9FBF7EFDFBF7EFDFBF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"dInR": true,
				"dTimeS": "100200",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"aOutR": true,
				"aTimeS": "110100",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 0,
						"dInR": true,
						"dTimeS": "100200",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 22,
						"aOutR": true,
						"aTimeS": "100800",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 430,
						"durS": "000600",
						"ctx": "G|1|G@F|A=1@O=München-Mittersendling@X=11536351@Y=48107823@U=80@L=8004154@|A=1@O=Adunistraße, München@X=11534356@Y=48109297@U=80@L=790090@|16112020|100200|100800|bf|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 5,
					"dep": {
						"locX": 22,
						"idx": 6,
						"dProdX": 15,
						"dInR": true,
						"dTimeS": "100800",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 23,
						"idx": 33,
						"aProdX": 15,
						"aOutR": true,
						"aTimeS": "105200",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|23698|14|80|16112020",
						"prodX": 18,
						"dirTxt": "Münchner Freiheit, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 22,
								"idx": 6,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "100800",
								"dDirTxt": "Münchner Freiheit, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 24,
								"idx": 7,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "101000",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "101000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 26,
								"idx": 8,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "101200",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "101400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 28,
								"idx": 9,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "101600",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "101600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 30,
								"idx": 10,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "101700",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "101700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 32,
								"idx": 11,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "101900",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "101900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 34,
								"idx": 12,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102100",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 35,
								"idx": 13,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 36,
								"idx": 14,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102300",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 38,
								"idx": 15,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102400",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 40,
								"idx": 16,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102500",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102500",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 42,
								"idx": 17,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102600",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 43,
								"idx": 18,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102700",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 44,
								"idx": 19,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "102900",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "102900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 46,
								"idx": 20,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "103100",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "103100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 48,
								"idx": 21,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "103300",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "103300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 49,
								"idx": 22,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "103400",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "103400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 50,
								"idx": 23,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "103600",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "103600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 52,
								"idx": 24,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "103800",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "103800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 54,
								"idx": 25,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104000",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 55,
								"idx": 26,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104100",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 57,
								"idx": 27,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104300",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 58,
								"idx": 28,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104400",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 59,
								"idx": 29,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104500",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104500",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 61,
								"idx": 30,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104700",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 63,
								"idx": 31,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "104800",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "104800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 65,
								"idx": 32,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "105000",
								"aTZOffset": 60,
								"dProdX": 18,
								"dInR": true,
								"dTimeS": "105000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 23,
								"idx": 33,
								"aProdX": 18,
								"aOutR": true,
								"aTimeS": "105200",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Adunistraße, München@L=790090@a=128@$A=1@O=Pündterplatz, München@L=622912@a=128@$202011161008$202011161052$      53$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 18,
								"fLocX": 22,
								"tLocX": 23,
								"fIdx": 6,
								"tIdx": 33
							}
						]
					},
					"minChg": "000900"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 23,
						"dInR": true,
						"dTimeS": "105200",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"aOutR": true,
						"aTimeS": "110100",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 659,
						"durS": "000900",
						"ctx": "G|1|G@F|A=1@O=Pündterplatz, München@X=11576866@Y=48162603@U=80@L=622912@|A=1@O=Karl-Theodor-Straße, München@X=11574043@Y=48166918@U=80@L=621790@|16112020|105200|110100|fb|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				}
			],
			"ctxRecon": "¶HKI¶G@F$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=Adunistraße, München@L=790090@a=128@$202011161002$202011161008$$$1$$$§T$A=1@O=Adunistraße, München@L=790090@a=128@$A=1@O=Pündterplatz, München@L=622912@a=128@$202011161008$202011161052$      53$$1$$$§G@F$A=1@O=Pündterplatz, München@L=622912@a=128@$A=1@O=Karl-Theodor-Straße, München@L=621790@a=128@$202011161052$202011161101$$$1$$$¶GP¶ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§",
			"freq": {
				"minC": 10
			},
			"conSubscr": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"calcDate": "20201115",
				"locMode": "FROM_START",
				"reqMode": "UNKNOWN",
				"calcTime": "143055"
			},
			"cksum": "43edeca7_3",
			"cksumDti": "59cf890b_3"
		},
		{
			"cid": "C-2",
			"date": "20201116",
			"dur": "003400",
			"chg": 1,
			"sDays": {
				"sDaysR": "runs 15. Nov until 12. Dec 2020 ",
				"sDaysB": "FF0000000000000000000000000000000000000000000000000000000000000000000000000000003FFFFFFFFFF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 20,
				"dProdX": 19,
				"dPlatfS": "2",
				"dInR": true,
				"dTimeS": "100400",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"aOutR": true,
				"aTimeS": "103800",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 2,
					"dep": {
						"locX": 0,
						"idx": 20,
						"dProdX": 19,
						"dPlatfS": "2",
						"dInR": true,
						"dTimeS": "100400",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 67,
						"idx": 21,
						"aProdX": 19,
						"aPlatfS": "2",
						"aOutR": true,
						"aTimeS": "100500",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|9612|1|80|16112020",
						"prodX": 22,
						"dirTxt": "Höllriegelskreuth",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 0,
								"idx": 20,
								"dProdX": 22,
								"dPlatfS": "2",
								"dInR": true,
								"dTimeS": "100400",
								"dDirTxt": "Höllriegelskreuth",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 67,
								"idx": 21,
								"aProdX": 22,
								"aPlatfS": "2",
								"aOutR": true,
								"aTimeS": "100500",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 20,
							"maxC": 20,
							"numC": 7
						},
						"ctxRecon": "T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Siemenswerke@L=8004137@a=128@$202011161004$202011161005$S      7$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 67,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1126170624
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 67,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 2,
								"fLocX": 0,
								"tLocX": 67,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 3,
								"fLocX": 0,
								"tLocX": 67,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1152385024
							}
						],
						"chRatingSoll": 2,
						"subscr": "F",
						"chgDurR": 10,
						"prodL": [
							{
								"prodX": 22,
								"fLocX": 0,
								"tLocX": 67,
								"fIdx": 20,
								"tIdx": 21
							}
						]
					},
					"minChg": "001000"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 67,
						"dInR": true,
						"dTimeS": "100500",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 68,
						"aOutR": true,
						"aTimeS": "101500",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 500,
						"durS": "001000",
						"dirGeo": 6,
						"ctx": "H|1|W$A=1@O=München Siemenswerke@L=8004137@a=128@$A=1@O=Obersendling, München@L=625016@a=128@$202011161005$202011161015$$$1$$$",
						"gisPrvr": "H",
						"msgL": [
							{
								"type": "REM",
								"remX": 4,
								"tagL": [
									"RES_JNY_DTL_H2"
								],
								"sort": 1099956224
							}
						],
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 6,
					"dep": {
						"locX": 68,
						"idx": 5,
						"dProdX": 11,
						"dInR": true,
						"dTimeS": "101500",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 4,
						"idx": 17,
						"aProdX": 11,
						"aOutR": true,
						"aTimeS": "103300",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|24525|9|80|16112020",
						"prodX": 12,
						"dirTxt": "Moosach, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 68,
								"idx": 5,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "101500",
								"dDirTxt": "Moosach, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 2,
								"idx": 6,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "101600",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "101600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 6,
								"idx": 7,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "101800",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "101800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 8,
								"idx": 8,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102000",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 10,
								"idx": 9,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102100",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 11,
								"idx": 10,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 12,
								"idx": 11,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102400",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 13,
								"idx": 12,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102600",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 15,
								"idx": 13,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102700",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 17,
								"idx": 14,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "102900",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "102900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 19,
								"idx": 15,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "103000",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "103000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 21,
								"idx": 16,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "103100",
								"aTZOffset": 60,
								"dProdX": 12,
								"dInR": true,
								"dTimeS": "103100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 4,
								"idx": 17,
								"aProdX": 12,
								"aOutR": true,
								"aTimeS": "103300",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Obersendling, München@L=625016@a=128@$A=1@O=Bonner Platz, München@L=624333@a=128@$202011161015$202011161033$U      3$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 12,
								"fLocX": 68,
								"tLocX": 4,
								"fIdx": 5,
								"tIdx": 17
							}
						]
					},
					"minChg": "000500"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 4,
						"dInR": true,
						"dTimeS": "103300",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"aOutR": true,
						"aTimeS": "103800",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 353,
						"durS": "000500",
						"ctx": "G|1|G@F|A=1@O=Bonner Platz, München@X=11578151@Y=48166702@U=80@L=624333@|A=1@O=Karl-Theodor-Straße, München@X=11574043@Y=48166918@U=80@L=621790@|16112020|103300|103800|fb|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Siemenswerke@L=8004137@a=128@$202011161004$202011161005$S      7$$1$$$§W$A=1@O=München Siemenswerke@L=8004137@a=128@$A=1@O=Obersendling, München@L=625016@a=128@$202011161005$202011161015$$$1$$$§T$A=1@O=Obersendling, München@L=625016@a=128@$A=1@O=Bonner Platz, München@L=624333@a=128@$202011161015$202011161033$U      3$$1$$$§G@F$A=1@O=Bonner Platz, München@L=624333@a=128@$A=1@O=Karl-Theodor-Straße, München@L=621790@a=128@$202011161033$202011161038$$$1$$$¶GP¶ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§",
			"freq": {
				"minC": 20
			},
			"conSubscr": "P",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20201115",
				"jid": "1|9612|1|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "143055"
			},
			"cksum": "88112d2f_3",
			"cksumDti": "f76189b5_3"
		},
		{
			"cid": "C-3",
			"date": "20201116",
			"dur": "003700",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 15. Nov until 12. Dec 2020 ",
				"sDaysB": "FF0000000000000000000000000000000000000000000000000000000000000000000000000000003FFFFFFFFFF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"dInR": true,
				"dTimeS": "101100",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"aOutR": true,
				"aTimeS": "104800",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 0,
						"dInR": true,
						"dTimeS": "101100",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 2,
						"aOutR": true,
						"aTimeS": "102600",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 1201,
						"durS": "001500",
						"ctx": "G|1|G@F|A=1@O=München-Mittersendling@X=11536351@Y=48107823@U=80@L=8004154@|A=1@O=Thalkirchen (Tierpark), München@X=11546015@Y=48102708@U=80@L=625236@|16112020|101100|102600|bf|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 6,
					"dep": {
						"locX": 2,
						"idx": 6,
						"dProdX": 24,
						"dInR": true,
						"dTimeS": "102600",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 4,
						"idx": 17,
						"aProdX": 24,
						"aOutR": true,
						"aTimeS": "104300",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|24525|10|80|16112020",
						"prodX": 25,
						"dirTxt": "Moosach, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 2,
								"idx": 6,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "102600",
								"dDirTxt": "Moosach, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 6,
								"idx": 7,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "102800",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "102800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 8,
								"idx": 8,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103000",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 10,
								"idx": 9,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103100",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 11,
								"idx": 10,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103200",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 12,
								"idx": 11,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103400",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 13,
								"idx": 12,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103600",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 15,
								"idx": 13,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103700",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 17,
								"idx": 14,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "103900",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "103900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 19,
								"idx": 15,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "104000",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "104000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 21,
								"idx": 16,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "104100",
								"aTZOffset": 60,
								"dProdX": 25,
								"dInR": true,
								"dTimeS": "104100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 4,
								"idx": 17,
								"aProdX": 25,
								"aOutR": true,
								"aTimeS": "104300",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Thalkirchen (Tierpark), München@L=625236@a=128@$A=1@O=Bonner Platz, München@L=624333@a=128@$202011161026$202011161043$U      3$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 25,
								"fLocX": 2,
								"tLocX": 4,
								"fIdx": 6,
								"tIdx": 17
							}
						]
					},
					"minChg": "000500"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 4,
						"dInR": true,
						"dTimeS": "104300",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"aOutR": true,
						"aTimeS": "104800",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 353,
						"durS": "000500",
						"ctx": "G|1|G@F|A=1@O=Bonner Platz, München@X=11578151@Y=48166702@U=80@L=624333@|A=1@O=Karl-Theodor-Straße, München@X=11574043@Y=48166918@U=80@L=621790@|16112020|104300|104800|fb|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				}
			],
			"ctxRecon": "¶HKI¶G@F$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=Thalkirchen (Tierpark), München@L=625236@a=128@$202011161011$202011161026$$$1$$$§T$A=1@O=Thalkirchen (Tierpark), München@L=625236@a=128@$A=1@O=Bonner Platz, München@L=624333@a=128@$202011161026$202011161043$U      3$$1$$$§G@F$A=1@O=Bonner Platz, München@L=624333@a=128@$A=1@O=Karl-Theodor-Straße, München@L=621790@a=128@$202011161043$202011161048$$$1$$$¶GP¶ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§",
			"freq": {
				"minC": 10
			},
			"conSubscr": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"calcDate": "20201115",
				"locMode": "FROM_START",
				"reqMode": "UNKNOWN",
				"calcTime": "143055"
			},
			"cksum": "e409aaf9_3",
			"cksumDti": "d4ad4942_3"
		},
		{
			"cid": "C-4",
			"date": "20201116",
			"dur": "005900",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 16. Nov until 12. Dec 2020 Mo - Sa ",
				"sDaysB": "7E8DB9F7EFDFBF7EFDFBF7EFDFBF7A7DFBD7EFDDBF3EEDFBF7EFDFBF7EFDF3F7EFDFBF7EF9FBF7EFDFBF7EFDFBF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"dInR": true,
				"dTimeS": "101200",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 1,
				"aOutR": true,
				"aTimeS": "111100",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 0,
						"dInR": true,
						"dTimeS": "101200",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 22,
						"aOutR": true,
						"aTimeS": "101800",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 430,
						"durS": "000600",
						"ctx": "G|1|G@F|A=1@O=München-Mittersendling@X=11536351@Y=48107823@U=80@L=8004154@|A=1@O=Adunistraße, München@X=11534356@Y=48109297@U=80@L=790090@|16112020|101200|101800|bf|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 5,
					"dep": {
						"locX": 22,
						"idx": 6,
						"dProdX": 26,
						"dInR": true,
						"dTimeS": "101800",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 23,
						"idx": 33,
						"aProdX": 26,
						"aOutR": true,
						"aTimeS": "110200",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|23698|15|80|16112020",
						"prodX": 27,
						"dirTxt": "Münchner Freiheit, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 22,
								"idx": 6,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "101800",
								"dDirTxt": "Münchner Freiheit, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 24,
								"idx": 7,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "102000",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "102000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 26,
								"idx": 8,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 28,
								"idx": 9,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "102600",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "102600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 30,
								"idx": 10,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "102700",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "102700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 32,
								"idx": 11,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "102900",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "102900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 34,
								"idx": 12,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103100",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 35,
								"idx": 13,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103200",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 36,
								"idx": 14,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103300",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 38,
								"idx": 15,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103400",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 40,
								"idx": 16,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103500",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103500",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 42,
								"idx": 17,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103600",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 43,
								"idx": 18,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103700",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 44,
								"idx": 19,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "103900",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "103900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 46,
								"idx": 20,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "104100",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "104100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 48,
								"idx": 21,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "104300",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "104300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 49,
								"idx": 22,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "104400",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "104400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 50,
								"idx": 23,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "104600",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "104600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 52,
								"idx": 24,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "104800",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "104800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 54,
								"idx": 25,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105000",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 55,
								"idx": 26,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105100",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 57,
								"idx": 27,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105300",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 58,
								"idx": 28,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105400",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 59,
								"idx": 29,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105500",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105500",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 61,
								"idx": 30,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105700",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 63,
								"idx": 31,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "105800",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "105800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 65,
								"idx": 32,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "110000",
								"aTZOffset": 60,
								"dProdX": 27,
								"dInR": true,
								"dTimeS": "110000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 23,
								"idx": 33,
								"aProdX": 27,
								"aOutR": true,
								"aTimeS": "110200",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Adunistraße, München@L=790090@a=128@$A=1@O=Pündterplatz, München@L=622912@a=128@$202011161018$202011161102$      53$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 27,
								"fLocX": 22,
								"tLocX": 23,
								"fIdx": 6,
								"tIdx": 33
							}
						]
					},
					"minChg": "000900"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 23,
						"dInR": true,
						"dTimeS": "110200",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 1,
						"aOutR": true,
						"aTimeS": "111100",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 659,
						"durS": "000900",
						"ctx": "G|1|G@F|A=1@O=Pündterplatz, München@X=11576866@Y=48162603@U=80@L=622912@|A=1@O=Karl-Theodor-Straße, München@X=11574043@Y=48166918@U=80@L=621790@|16112020|110200|111100|fb|ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§|",
						"gisPrvr": "E",
						"getDescr": true,
						"getPoly": true
					}
				}
			],
			"ctxRecon": "¶HKI¶G@F$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=Adunistraße, München@L=790090@a=128@$202011161012$202011161018$$$1$$$§T$A=1@O=Adunistraße, München@L=790090@a=128@$A=1@O=Pündterplatz, München@L=622912@a=128@$202011161018$202011161102$      53$$1$$$§G@F$A=1@O=Pündterplatz, München@L=622912@a=128@$A=1@O=Karl-Theodor-Straße, München@L=621790@a=128@$202011161102$202011161111$$$1$$$¶GP¶ft@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§bt@0@2000@120@1@100@1@1000@0@@@@@false@0@-1@$f@$f@$f@$f@$f@$§tt@0@5000@120@1@100@1@2500@0@@@@@false@0@-1@$t@0@25000@120@1@100@1@3000@0@@@@@false@0@-1@$f@$f@$f@$f@$§",
			"freq": {
				"minC": 10
			},
			"conSubscr": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"calcDate": "20201115",
				"locMode": "FROM_START",
				"reqMode": "UNKNOWN",
				"calcTime": "143055"
			},
			"cksum": "5db863da_3",
			"cksumDti": "2bb9e7d8_3"
		},
		{
			"cid": "C-5",
			"date": "20201116",
			"dur": "002800",
			"chg": 3,
			"sDays": {
				"sDaysR": "runs 16. until 27. Nov 2020 Mo - Fr ",
				"sDaysB": "000000000000000000000000000000000000000000000000000000000000000000000000000000001F3E7CF80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 11,
				"dProdX": 28,
				"dPlatfS": "1",
				"dInR": true,
				"dTimeS": "101500",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 70,
				"idx": 9,
				"aProdX": 29,
				"aOutR": true,
				"aTimeS": "104300",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 2,
					"dep": {
						"locX": 0,
						"idx": 11,
						"dProdX": 28,
						"dPlatfS": "1",
						"dInR": true,
						"dTimeS": "101500",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 27,
						"idx": 12,
						"aProdX": 28,
						"aPlatfS": "1",
						"aOutR": true,
						"aTimeS": "101700",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|9605|2|80|16112020",
						"prodX": 30,
						"dirTxt": "Höhenkirchen-Siegertsbrunn",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 0,
								"idx": 11,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "101500",
								"dDirTxt": "Höhenkirchen-Siegertsbrunn",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 27,
								"idx": 12,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "101700",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 20,
							"maxC": 20,
							"numC": 7
						},
						"ctxRecon": "T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Harras@L=8004130@a=128@$202011161015$202011161017$S      7$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 27,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1126170624
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 27,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 2,
								"fLocX": 0,
								"tLocX": 27,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 3,
								"fLocX": 0,
								"tLocX": 27,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1152385024
							}
						],
						"chRatingSoll": 2,
						"subscr": "F",
						"chgDurR": 3,
						"prodL": [
							{
								"prodX": 30,
								"fLocX": 0,
								"tLocX": 27,
								"fIdx": 11,
								"tIdx": 12
							}
						]
					},
					"minChg": "000300"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 27,
						"dInR": true,
						"dTimeS": "101700",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 71,
						"aOutR": true,
						"aTimeS": "102000",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 152,
						"durS": "000300",
						"dirGeo": 28,
						"ctx": "H|1|W$A=1@O=München Harras@L=8004130@a=128@$A=1@O=Harras, München@L=624602@a=128@$202011161017$202011161020$$$1$$$",
						"gisPrvr": "H",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 15,
					"dep": {
						"locX": 71,
						"idx": 0,
						"dProdX": 37,
						"dInR": true,
						"dTimeS": "102000",
						"dProgType": "PROGNOSED",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 12,
						"idx": 4,
						"aProdX": 37,
						"aOutR": true,
						"aTimeS": "102600",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|27512|1|80|16112020",
						"prodX": 38,
						"dirTxt": "Münchner Freiheit, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 71,
								"idx": 0,
								"dProdX": 38,
								"dInR": true,
								"dTimeS": "102000",
								"dProgType": "PROGNOSED",
								"dDirTxt": "Münchner Freiheit, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 8,
								"idx": 1,
								"aProdX": 38,
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 38,
								"dInR": true,
								"dTimeS": "102200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 10,
								"idx": 2,
								"aProdX": 38,
								"aOutR": true,
								"aTimeS": "102300",
								"aTZOffset": 60,
								"dProdX": 38,
								"dInR": true,
								"dTimeS": "102300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 11,
								"idx": 3,
								"aProdX": 38,
								"aOutR": true,
								"aTimeS": "102400",
								"aTZOffset": 60,
								"dProdX": 38,
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 12,
								"idx": 4,
								"aProdX": 38,
								"aOutR": true,
								"aTimeS": "102600",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 4,
							"maxC": 6,
							"numC": 25
						},
						"ctxRecon": "T$A=1@O=Harras, München@L=624602@a=128@$A=1@O=Sendlinger Tor, München@L=625176@a=128@$202011161020$202011161026$U      6$$1$$$",
						"chRatingSoll": 2,
						"subscr": "N",
						"chgDurR": 2,
						"prodL": [
							{
								"prodX": 38,
								"fLocX": 71,
								"tLocX": 12,
								"fIdx": 0,
								"tIdx": 4
							}
						]
					},
					"minChg": "000200"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 12,
						"dInR": true,
						"dTimeS": "102600",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 72,
						"aOutR": true,
						"aTimeS": "102800",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 56,
						"durS": "000200",
						"dirGeo": 12,
						"ctx": "H|1|W$A=1@O=Sendlinger Tor, München@L=625176@a=128@$A=1@O=Sendlinger Tor, München@L=624625@a=128@$202011161026$202011161028$$$1$$$",
						"gisPrvr": "H",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 4,
					"dep": {
						"locX": 72,
						"idx": 0,
						"dProdX": 58,
						"dInR": true,
						"dTimeS": "102800",
						"dProgType": "PROGNOSED",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 73,
						"idx": 1,
						"aProdX": 58,
						"aOutR": true,
						"aTimeS": "103000",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|22977|21|80|16112020",
						"prodX": 74,
						"dirTxt": "Willibaldplatz, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 72,
								"idx": 0,
								"dProdX": 74,
								"dInR": true,
								"dTimeS": "102800",
								"dProgType": "PROGNOSED",
								"dDirTxt": "Willibaldplatz, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 73,
								"idx": 1,
								"aProdX": 74,
								"aOutR": true,
								"aTimeS": "103000",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 2,
							"maxC": 3,
							"numC": 49
						},
						"ctxRecon": "T$A=1@O=Sendlinger Tor, München@L=624625@a=128@$A=1@O=Karlsplatz (Stachus), München@L=624746@a=128@$202011161028$202011161030$      29$$1$$$",
						"chRatingSoll": 2,
						"subscr": "N",
						"chgDurR": 1,
						"prodL": [
							{
								"prodX": 74,
								"fLocX": 72,
								"tLocX": 73,
								"fIdx": 0,
								"tIdx": 1
							}
						]
					},
					"minChg": "000100"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 73,
						"dInR": true,
						"dTimeS": "103000",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 75,
						"aOutR": true,
						"aTimeS": "103100",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 20,
						"durS": "000100",
						"dirGeo": 20,
						"ctx": "H|1|W$A=1@O=Karlsplatz (Stachus), München@L=624746@a=128@$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$202011161030$202011161031$$$1$$$",
						"gisPrvr": "H",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 4,
					"dep": {
						"locX": 75,
						"idx": 0,
						"dProdX": 29,
						"dInR": true,
						"dTimeS": "103100",
						"dProgType": "PROGNOSED",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 70,
						"idx": 9,
						"aProdX": 29,
						"aOutR": true,
						"aTimeS": "104300",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|22959|2|80|16112020",
						"prodX": 75,
						"dirTxt": "Scheidplatz, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 75,
								"idx": 0,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103100",
								"dProgType": "PROGNOSED",
								"dDirTxt": "Scheidplatz, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 76,
								"idx": 1,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "103300",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 78,
								"idx": 2,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "103400",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 80,
								"idx": 3,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "103600",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 81,
								"idx": 4,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "103700",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 82,
								"idx": 5,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "103800",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 84,
								"idx": 6,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "103900",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "103900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 86,
								"idx": 7,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "104100",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "104100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 87,
								"idx": 8,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "104200",
								"aTZOffset": 60,
								"dProdX": 75,
								"dInR": true,
								"dTimeS": "104200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 70,
								"idx": 9,
								"aProdX": 75,
								"aOutR": true,
								"aTimeS": "104300",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$A=1@O=Karl-Theodor-Straße, München@L=638842@a=128@$202011161031$202011161043$      28$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 75,
								"fLocX": 75,
								"tLocX": 70,
								"fIdx": 0,
								"tIdx": 9
							}
						]
					}
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Harras@L=8004130@a=128@$202011161015$202011161017$S      7$$1$$$§W$A=1@O=München Harras@L=8004130@a=128@$A=1@O=Harras, München@L=624602@a=128@$202011161017$202011161020$$$1$$$§T$A=1@O=Harras, München@L=624602@a=128@$A=1@O=Sendlinger Tor, München@L=625176@a=128@$202011161020$202011161026$U      6$$1$$$§W$A=1@O=Sendlinger Tor, München@L=625176@a=128@$A=1@O=Sendlinger Tor, München@L=624625@a=128@$202011161026$202011161028$$$1$$$§T$A=1@O=Sendlinger Tor, München@L=624625@a=128@$A=1@O=Karlsplatz (Stachus), München@L=624746@a=128@$202011161028$202011161030$      29$$1$$$§W$A=1@O=Karlsplatz (Stachus), München@L=624746@a=128@$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$202011161030$202011161031$$$1$$$§T$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$A=1@O=Karl-Theodor-Straße, München@L=638842@a=128@$202011161031$202011161043$      28$$1$$$",
			"freq": {
				"minC": 20
			},
			"conSubscr": "P",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20201115",
				"jid": "1|9605|2|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "143055"
			},
			"cksum": "484ac4c9_3",
			"cksumDti": "894674a3_3"
		},
		{
			"cid": "C-6",
			"date": "20201116",
			"dur": "003000",
			"chg": 2,
			"sDays": {
				"sDaysR": "runs 16. until 27. Nov 2020 Mo - Fr ",
				"sDaysB": "000000000000000000000000000000000000000000000000000000000000000000000000000000001F3E7CF80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 11,
				"dProdX": 28,
				"dPlatfS": "1",
				"dInR": true,
				"dTimeS": "101500",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 70,
				"idx": 1,
				"aProdX": 76,
				"aOutR": true,
				"aTimeS": "104500",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 2,
					"dep": {
						"locX": 0,
						"idx": 11,
						"dProdX": 28,
						"dPlatfS": "1",
						"dInR": true,
						"dTimeS": "101500",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 88,
						"idx": 16,
						"aProdX": 28,
						"aPlatfS": "1",
						"aOutR": true,
						"aTimeS": "102700",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|9605|2|80|16112020",
						"prodX": 30,
						"dirTxt": "Höhenkirchen-Siegertsbrunn",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 0,
								"idx": 11,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "101500",
								"dDirTxt": "Höhenkirchen-Siegertsbrunn",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 27,
								"idx": 12,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "101700",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "101700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 90,
								"idx": 13,
								"aProdX": 30,
								"aPlatfS": "2",
								"aOutR": true,
								"aTimeS": "101900",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "2",
								"dInR": true,
								"dTimeS": "102000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 47,
								"idx": 14,
								"aProdX": 30,
								"aPlatfS": "4",
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "4",
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 91,
								"idx": 15,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "102500",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "102600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 88,
								"idx": 16,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "102700",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 20,
							"maxC": 20,
							"numC": 7
						},
						"ctxRecon": "T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Hbf (tief)@L=8098263@a=128@$202011161015$202011161027$S      7$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 88,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1126170624
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 88,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 2,
								"fLocX": 0,
								"tLocX": 88,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 3,
								"fLocX": 0,
								"tLocX": 88,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1152385024
							}
						],
						"chRatingSoll": 2,
						"subscr": "F",
						"chgDurR": 6,
						"prodL": [
							{
								"prodX": 30,
								"fLocX": 0,
								"tLocX": 88,
								"fIdx": 11,
								"tIdx": 16
							}
						]
					},
					"minChg": "000300"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 88,
						"dInR": true,
						"dTimeS": "102700",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 92,
						"aOutR": true,
						"aTimeS": "103000",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 134,
						"durS": "000300",
						"dirGeo": 26,
						"ctx": "H|1|W$A=1@O=München Hbf (tief)@L=8098263@a=128@$A=1@O=Hauptbahnhof, München@L=624637@a=128@$202011161027$202011161030$$$1$$$",
						"gisPrvr": "H",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 10,
					"dep": {
						"locX": 92,
						"idx": 14,
						"dProdX": 98,
						"dInR": true,
						"dTimeS": "103300",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 93,
						"idx": 19,
						"aProdX": 98,
						"aOutR": true,
						"aTimeS": "104000",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|23370|7|80|16112020",
						"prodX": 104,
						"dirTxt": "Harthof, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 92,
								"idx": 14,
								"dProdX": 104,
								"dInR": true,
								"dTimeS": "103300",
								"dDirTxt": "Harthof, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 95,
								"idx": 15,
								"aProdX": 104,
								"aOutR": true,
								"aTimeS": "103500",
								"aTZOffset": 60,
								"dProdX": 104,
								"dInR": true,
								"dTimeS": "103500",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 96,
								"idx": 16,
								"aProdX": 104,
								"aOutR": true,
								"aTimeS": "103600",
								"aTZOffset": 60,
								"dProdX": 104,
								"dInR": true,
								"dTimeS": "103600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 97,
								"idx": 17,
								"aProdX": 104,
								"aOutR": true,
								"aTimeS": "103700",
								"aTZOffset": 60,
								"dProdX": 104,
								"dInR": true,
								"dTimeS": "103700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 64,
								"idx": 18,
								"aProdX": 104,
								"aOutR": true,
								"aTimeS": "103800",
								"aTZOffset": 60,
								"dProdX": 104,
								"dInR": true,
								"dTimeS": "103800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 93,
								"idx": 19,
								"aProdX": 104,
								"aOutR": true,
								"aTimeS": "104000",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 5,
							"maxC": 5,
							"numC": 25
						},
						"ctxRecon": "T$A=1@O=Hauptbahnhof, München@L=624637@a=128@$A=1@O=Scheidplatz, München@L=624529@a=128@$202011161033$202011161040$U      2$$1$$$",
						"chRatingSoll": 2,
						"subscr": "N",
						"chgDurR": 4,
						"prodL": [
							{
								"prodX": 104,
								"fLocX": 92,
								"tLocX": 93,
								"fIdx": 14,
								"tIdx": 19
							}
						]
					},
					"minChg": "000300"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 93,
						"dInR": true,
						"dTimeS": "104000",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 98,
						"aOutR": true,
						"aTimeS": "104300",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 18,
						"durS": "000300",
						"dirGeo": 24,
						"ctx": "H|1|W$A=1@O=Scheidplatz, München@L=624529@a=128@$A=1@O=Scheidplatz, München@L=624388@a=128@$202011161040$202011161043$$$1$$$",
						"gisPrvr": "H",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 4,
					"dep": {
						"locX": 98,
						"idx": 0,
						"dProdX": 76,
						"dInR": true,
						"dTimeS": "104400",
						"dProgType": "PROGNOSED",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 70,
						"idx": 1,
						"aProdX": 76,
						"aOutR": true,
						"aTimeS": "104500",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|22954|1|80|16112020",
						"prodX": 105,
						"dirTxt": "Karlsplatz (Stachus), München",
						"dirFlg": "1",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 98,
								"idx": 0,
								"dProdX": 105,
								"dInR": true,
								"dTimeS": "104400",
								"dProgType": "PROGNOSED",
								"dDirTxt": "Karlsplatz (Stachus), München",
								"dDirFlg": "1",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 70,
								"idx": 1,
								"aProdX": 105,
								"aOutR": true,
								"aTimeS": "104500",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 5,
							"maxC": 5,
							"numC": 25
						},
						"ctxRecon": "T$A=1@O=Scheidplatz, München@L=624388@a=128@$A=1@O=Karl-Theodor-Straße, München@L=638842@a=128@$202011161044$202011161045$      28$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 105,
								"fLocX": 98,
								"tLocX": 70,
								"fIdx": 0,
								"tIdx": 1
							}
						]
					}
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Hbf (tief)@L=8098263@a=128@$202011161015$202011161027$S      7$$1$$$§W$A=1@O=München Hbf (tief)@L=8098263@a=128@$A=1@O=Hauptbahnhof, München@L=624637@a=128@$202011161027$202011161030$$$1$$$§T$A=1@O=Hauptbahnhof, München@L=624637@a=128@$A=1@O=Scheidplatz, München@L=624529@a=128@$202011161033$202011161040$U      2$$1$$$§W$A=1@O=Scheidplatz, München@L=624529@a=128@$A=1@O=Scheidplatz, München@L=624388@a=128@$202011161040$202011161043$$$1$$$§T$A=1@O=Scheidplatz, München@L=624388@a=128@$A=1@O=Karl-Theodor-Straße, München@L=638842@a=128@$202011161044$202011161045$      28$$1$$$",
			"freq": {
				"minC": 20
			},
			"conSubscr": "P",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20201115",
				"jid": "1|9605|2|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "143055"
			},
			"cksum": "5fa6c133_3",
			"cksumDti": "b1e58a35_3"
		},
		{
			"cid": "C-7",
			"date": "20201116",
			"dur": "003800",
			"chg": 1,
			"sDays": {
				"sDaysR": "runs 16. until 28. Nov 2020 Mo - Sa ",
				"sDaysB": "00000000000000000000000000007A0003D7EF9DBF3EEDFBF7EFDFBF00000000000FBF7EB9FBF7CFDFBF7EFC0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 11,
				"dProdX": 28,
				"dPlatfS": "1",
				"dInR": true,
				"dTimeS": "101500",
				"dTZOffset": 60,
				"type": "N"
			},
			"arr": {
				"locX": 70,
				"idx": 9,
				"aProdX": 106,
				"aOutR": true,
				"aTimeS": "105300",
				"aTZOffset": 60,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 2,
					"dep": {
						"locX": 0,
						"idx": 11,
						"dProdX": 28,
						"dPlatfS": "1",
						"dInR": true,
						"dTimeS": "101500",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 74,
						"idx": 17,
						"aProdX": 28,
						"aPlatfS": "1",
						"aOutR": true,
						"aTimeS": "102800",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|9605|2|80|16112020",
						"prodX": 30,
						"dirTxt": "Höhenkirchen-Siegertsbrunn",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 0,
								"idx": 11,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "101500",
								"dDirTxt": "Höhenkirchen-Siegertsbrunn",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 27,
								"idx": 12,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "101700",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "101700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 90,
								"idx": 13,
								"aProdX": 30,
								"aPlatfS": "2",
								"aOutR": true,
								"aTimeS": "101900",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "2",
								"dInR": true,
								"dTimeS": "102000",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 47,
								"idx": 14,
								"aProdX": 30,
								"aPlatfS": "4",
								"aOutR": true,
								"aTimeS": "102200",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "4",
								"dInR": true,
								"dTimeS": "102400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 91,
								"idx": 15,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "102500",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "102600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 88,
								"idx": 16,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "102700",
								"aTZOffset": 60,
								"dProdX": 30,
								"dPlatfS": "1",
								"dInR": true,
								"dTimeS": "102700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 74,
								"idx": 17,
								"aProdX": 30,
								"aPlatfS": "1",
								"aOutR": true,
								"aTimeS": "102800",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 20,
							"maxC": 20,
							"numC": 7
						},
						"ctxRecon": "T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Karlsplatz@L=8004132@a=128@$202011161015$202011161028$S      7$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 74,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1126170624
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 74,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 2,
								"fLocX": 0,
								"tLocX": 74,
								"tagL": [
									"RES_JNY_DTL"
								],
								"sort": 1141899264
							},
							{
								"type": "REM",
								"remX": 3,
								"fLocX": 0,
								"tLocX": 74,
								"tagL": [
									"RES_JNY_DTL_L"
								],
								"sort": 1152385024
							}
						],
						"chRatingSoll": 2,
						"subscr": "F",
						"chgDurR": 13,
						"prodL": [
							{
								"prodX": 30,
								"fLocX": 0,
								"tLocX": 74,
								"fIdx": 11,
								"tIdx": 17
							}
						]
					},
					"minChg": "000400"
				},
				{
					"type": "WALK",
					"icoX": 7,
					"dep": {
						"locX": 74,
						"dInR": true,
						"dTimeS": "102800",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 75,
						"aOutR": true,
						"aTimeS": "103200",
						"aTZOffset": 60,
						"type": "N"
					},
					"gis": {
						"dist": 111,
						"durS": "000400",
						"dirGeo": 22,
						"ctx": "H|1|W$A=1@O=München Karlsplatz@L=8004132@a=128@$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$202011161028$202011161032$$$1$$$",
						"gisPrvr": "H",
						"getDescr": true,
						"getPoly": true
					}
				},
				{
					"type": "JNY",
					"icoX": 4,
					"dep": {
						"locX": 75,
						"idx": 0,
						"dProdX": 106,
						"dInR": true,
						"dTimeS": "104100",
						"dProgType": "PROGNOSED",
						"dTZOffset": 60,
						"type": "N"
					},
					"arr": {
						"locX": 70,
						"idx": 9,
						"aProdX": 106,
						"aOutR": true,
						"aTimeS": "105300",
						"aTZOffset": 60,
						"type": "N"
					},
					"jny": {
						"jid": "1|22959|3|80|16112020",
						"prodX": 107,
						"dirTxt": "Scheidplatz, München",
						"dirFlg": "2",
						"status": "P",
						"isRchbl": true,
						"stopL": [
							{
								"locX": 75,
								"idx": 0,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104100",
								"dProgType": "PROGNOSED",
								"dDirTxt": "Scheidplatz, München",
								"dDirFlg": "2",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 76,
								"idx": 1,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "104300",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104300",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 78,
								"idx": 2,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "104400",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104400",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 80,
								"idx": 3,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "104600",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104600",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 81,
								"idx": 4,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "104700",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104700",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 82,
								"idx": 5,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "104800",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104800",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 84,
								"idx": 6,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "104900",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "104900",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 86,
								"idx": 7,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "105100",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "105100",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 87,
								"idx": 8,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "105200",
								"aTZOffset": 60,
								"dProdX": 107,
								"dInR": true,
								"dTimeS": "105200",
								"dTZOffset": 60,
								"type": "N"
							},
							{
								"locX": 70,
								"idx": 9,
								"aProdX": 107,
								"aOutR": true,
								"aTimeS": "105300",
								"aTZOffset": 60,
								"type": "N"
							}
						],
						"freq": {
							"minC": 10,
							"maxC": 10,
							"numC": 13
						},
						"ctxRecon": "T$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$A=1@O=Karl-Theodor-Straße, München@L=638842@a=128@$202011161041$202011161053$      28$$1$$$",
						"subscr": "N",
						"prodL": [
							{
								"prodX": 107,
								"fLocX": 75,
								"tLocX": 70,
								"fIdx": 0,
								"tIdx": 9
							}
						]
					}
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=München-Mittersendling@L=8004154@a=128@$A=1@O=München Karlsplatz@L=8004132@a=128@$202011161015$202011161028$S      7$$1$$$§W$A=1@O=München Karlsplatz@L=8004132@a=128@$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$202011161028$202011161032$$$1$$$§T$A=1@O=Karlsplatz (Stachus), München@L=624744@a=128@$A=1@O=Karl-Theodor-Straße, München@L=638842@a=128@$202011161041$202011161053$      28$$1$$$",
			"freq": {
				"minC": 20
			},
			"conSubscr": "P",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20201115",
				"jid": "1|9605|2|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "143055"
			},
			"cksum": "a2dec66f_3",
			"cksumDti": "917ce36f_3"
		}
	],
	"outCtxScrB": "2|OB|MT#11#488764#488761#488798#488798#0#0#165#488760#1#-2147482624#0#1#2|PDH#2b878f47f29a9a10624384e358b5f85e|RD#16112020|RT#100000|US#1",
	"outCtxScrF": "2|OF|MT#11#488775#488775#488803#488813#0#0#165#488765#8#-2147483646#0#1#2|PDH#2b878f47f29a9a10624384e358b5f85e|RD#16112020|RT#100000|US#1",
	"fpB": "20191215",
	"fpE": "20211211",
	"bfATS": -1,
	"bfIOSTS": -1,
	"planrtTS": "1605447010",
	"outConGrpL": [
		{
			"name": "Alle Verbindungen",
			"icoX": 29,
			"grpid": "pt_only",
			"conScoringL": [
				{
					"type": "DT",
					"conScoreL": [
						{
							"score": 7086444799915459000,
							"conRefL": [
								0
							]
						},
						{
							"score": 7086440401822810000,
							"conRefL": [
								1
							]
						},
						{
							"score": 7086431605782217000,
							"conRefL": [
								2
							]
						},
						{
							"score": 7086400819450348000,
							"conRefL": [
								3
							]
						},
						{
							"score": 7086396421357699000,
							"conRefL": [
								4
							]
						},
						{
							"score": 7086383227283177000,
							"conRefL": [
								5
							]
						},
						{
							"score": 7086383227278983000,
							"conRefL": [
								6
							]
						},
						{
							"score": 7086383227262206000,
							"conRefL": [
								7
							]
						}
					],
					"name": "Departure"
				},
				{
					"type": "AT",
					"conScoreL": [
						{
							"score": 7086282072194548000,
							"conRefL": [
								0
							]
						},
						{
							"score": 7086180917078655000,
							"conRefL": [
								1
							]
						},
						{
							"score": 7086282072200839000,
							"conRefL": [
								2
							]
						},
						{
							"score": 7086238091729437000,
							"conRefL": [
								3
							]
						},
						{
							"score": 7086136936613544000,
							"conRefL": [
								4
							]
						},
						{
							"score": 7086260081980867000,
							"conRefL": [
								5
							]
						},
						{
							"score": 7086251285883650000,
							"conRefL": [
								6
							]
						},
						{
							"score": 7086216101494784000,
							"conRefL": [
								7
							]
						}
					],
					"name": "Arrival"
				},
				{
					"type": "TI",
					"conScoreL": [
						{
							"score": 9223208290167554000,
							"conRefL": [
								0
							]
						},
						{
							"score": 9223111533142213000,
							"conRefL": [
								1
							]
						},
						{
							"score": 9223221484300796000,
							"conRefL": [
								2
							]
						},
						{
							"score": 9223208290146583000,
							"conRefL": [
								3
							]
						},
						{
							"score": 9223111533121241000,
							"conRefL": [
								4
							]
						},
						{
							"score": 9223247872556794000,
							"conRefL": [
								5
							]
						},
						{
							"score": 9223239076463772000,
							"conRefL": [
								6
							]
						},
						{
							"score": 9223203892091683000,
							"conRefL": [
								7
							]
						}
					],
					"name": "Duration"
				}
			],
			"initScoringType": "DT"
		}
	]
}
const r3 : RawResult = 
{
	"common": {
		"locL": [
			{
				"lid": "A=1@O=Berlin Hbf (tief)@X=13369549@Y=52525589@U=80@L=8098160@",
				"type": "S",
				"name": "Berlin Hbf (tief)",
				"icoX": 0,
				"extId": "8098160",
				"state": "F",
				"crd": {
					"x": 13368892,
					"y": 52525850,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 319,
				"entry": true,
				"mMastLocX": 1
			},
			{
				"lid": "A=1@O=Berlin Hbf@X=13369549@Y=52525589@U=80@L=8011160@",
				"type": "S",
				"name": "Berlin Hbf",
				"icoX": 0,
				"extId": "8011160",
				"state": "F",
				"crd": {
					"x": 13369629,
					"y": 52524924,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 319
			},
			{
				"lid": "A=1@O=Hamburg Hbf@X=10006909@Y=53552733@U=80@L=8002549@",
				"type": "S",
				"name": "Hamburg Hbf",
				"icoX": 0,
				"extId": "8002549",
				"state": "F",
				"crd": {
					"x": 10006360,
					"y": 53553533,
					"z": 0,
					"type": "WGS84",
					"layerX": 0,
					"crdSysX": 0
				},
				"pCls": 191
			}
		],
		"prodL": [
			{
				"name": "ICE 696",
				"number": "696",
				"icoX": 0,
				"cls": 1,
				"oprX": 0,
				"prodCtx": {
					"name": "ICE  696",
					"num": "696",
					"matchId": "11",
					"catOut": "ICE",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express",
					"catIn": "ICE",
					"catCode": "0",
					"admin": "80____"
				}
			},
			{
				"name": "ICE 602",
				"number": "602",
				"icoX": 0,
				"cls": 1,
				"oprX": 0,
				"prodCtx": {
					"name": "ICE  602",
					"num": "602",
					"matchId": "28",
					"catOut": "ICE",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express",
					"catIn": "ICE",
					"catCode": "0",
					"admin": "80____"
				}
			},
			{
				"name": "ICE 802",
				"number": "802",
				"icoX": 0,
				"cls": 1,
				"oprX": 0,
				"prodCtx": {
					"name": "ICE  802",
					"num": "802",
					"matchId": "18",
					"catOut": "ICE",
					"catOutS": "ICE",
					"catOutL": "Intercity-Express",
					"catIn": "ICE",
					"catCode": "0",
					"admin": "80____"
				}
			}
		],
		"polyL": [],
		"layerL": [
			{
				"id": "standard",
				"name": "standard",
				"index": 0,
				"annoCnt": 0
			}
		],
		"crdSysL": [
			{
				"id": "standard",
				"index": 0,
				"type": "WGS84",
				"dim": 3
			}
		],
		"opL": [
			{
				"name": "DB Fernverkehr AG",
				"icoX": 1
			}
		],
		"remL": [
			{
				"type": "A",
				"code": "CK",
				"prio": 200,
				"icoX": 2,
				"txtN": "Komfort Check-in möglich (Infos unter bahn.de/kci)"
			},
			{
				"type": "A",
				"code": "BR",
				"prio": 450,
				"icoX": 3,
				"txtN": "Bordrestaurant"
			},
			{
				"type": "M",
				"code": "",
				"icoX": 4,
				"txtS": "ICE 696: Berlin Hbf (tief)->Hamburg Hbf: Information.",
				"txtN": "Bitte beachten Sie die Regelung zur Mund-Nase-Bedeckung im öffentlichen Personenverkehr.",
				"sIdx": 0
			},
			{
				"type": "A",
				"code": "FR",
				"prio": 260,
				"icoX": 5,
				"txtN": "Bicycles conveyed - subject to reservation"
			},
			{
				"type": "A",
				"code": "FB",
				"prio": 260,
				"icoX": 6,
				"txtN": "Number of bicycles conveyed limited"
			},
			{
				"type": "A",
				"code": "EH",
				"prio": 560,
				"icoX": 2,
				"txtN": "vehicle-mounted accessaid"
			},
			{
				"type": "M",
				"code": "",
				"icoX": 4,
				"txtS": "ICE 602: Berlin Hbf (tief)->Hamburg Hbf: Information.",
				"txtN": "Bitte beachten Sie die Regelung zur Mund-Nase-Bedeckung im öffentlichen Personenverkehr.",
				"sIdx": 0
			},
			{
				"type": "M",
				"code": "",
				"icoX": 4,
				"txtS": "ICE 802: Berlin Hbf (tief)->Hamburg Hbf: Information.",
				"txtN": "Bitte beachten Sie die Regelung zur Mund-Nase-Bedeckung im öffentlichen Personenverkehr.",
				"sIdx": 0
			}
		],
		"icoL": [
			{
				"res": "ICE"
			},
			{
				"res": "D",
				"txt": "DB Fernverkehr AG"
			},
			{
				"res": "attr_info"
			},
			{
				"res": "attr_resto"
			},
			{
				"res": "HimLow"
			},
			{
				"res": "attr_bike_r"
			},
			{
				"res": "attr_bike"
			}
		],
		"tcocL": [
			{
				"c": "FIRST",
				"r": 1
			},
			{
				"c": "SECOND",
				"r": 1
			},
			{
				"c": "SECOND",
				"r": 3
			}
		]
	},
	"outConL": [
		{
			"cid": "C-0",
			"date": "20200727",
			"dur": "015600",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 26. until 28. Jul 2020 ",
				"sDaysB": "00000000000000000000000000000000000000000000000000000004E00000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 9,
				"dProdX": 0,
				"dPlatfS": "7",
				"dInR": true,
				"dTimeS": "103800",
				"dProgType": "PROGNOSED",
				"dTZOffset": 120,
				"type": "N"
			},
			"arr": {
				"locX": 2,
				"idx": 11,
				"aPlatfS": "5",
				"aOutR": true,
				"aTimeS": "123400",
				"aProgType": "PROGNOSED",
				"aTZOffset": 120,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 0,
					"dep": {
						"locX": 0,
						"idx": 9,
						"dProdX": 0,
						"dPlatfS": "7",
						"dInR": true,
						"dTimeS": "103800",
						"dProgType": "PROGNOSED",
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 2,
						"idx": 11,
						"aPlatfS": "5",
						"aOutR": true,
						"aTimeS": "123400",
						"aProgType": "PROGNOSED",
						"aTZOffset": 120,
						"type": "N"
					},
					"jny": {
						"jid": "1|244757|0|80|27072020",
						"prodX": 0,
						"dirTxt": "Kiel Hbf",
						"status": "P",
						"isRchbl": true,
						"poly": {
							"delta": true,
							"dim": 3,
							"type": "WGS84",
							"crdEncYX": "q}q_IqbrpA@BeMfIyHvH_A_D??sEnGwNzO??h@jB{EjFgF`GgB`DiAdDoArHHBFB[|F?dGn@dNq@L??`BvTfA`T??nApPn@zKXGYFtB|\\SDRE`Cr`@??N~BDAWHrPp`ClEjs@??@@TGrDhg@z@dQlLbwEF?DAnApj@M|^mA~NoHj`@qBbZUEAtCeCpg@JB??mGf_AOC@@kBjYq@OuBpUcH`]h@d@qB|N[O}BbViElj@rAf@aA]sA|NCAB@eMjwAiFf_@yFt_@st@zmE??rAaI??qRfkA??aSdiAyXjbB??c}@hnF??w]zuB??????od@foCcMlv@??sSzoA}Lpq@geAxnGoUdsAkWv}AuLtv@{S~kA??mHpe@gHt^ey@z|C??owFp~S??qp@deCqHxUiItS??aInPiItNw~HrvM??q|DhwG??a{OnaX??gZjg@uFlJO[s\\`k@??P\\yj@`aAcD|H{EnPc}CjjNyDbTcCdUeA|UIdVvLn~HdBvc@p[jiG~@|c@@rQUhS??y[jtMaArZcAdQaEvb@ydA`eI??mJjh@_I~ZujIx_W??kRvl@_Vz~@kDjOoeBf_JsTjkAgD`UkCf\\mCvaAeRxoI[nTLle@_@fLkAYjAXeAnLyB~LqEpNkD|G}ExG}CrCyG`EkKrEiLzE??eMhD_OhBi`AxH??en@lEkiJ~u@??s`NvhA??myDrZcJnA_U~FaOnGuSpMyMfLeMbNmL|OsKpQiNhZaoCvyH??ub@bmA??m}EhfNyIlTkSv`@??gkDjbHjDbHkDcHqH|MqHrKgLhMcLdJgHdEaIbDqWfFmGbBoHnD{FhEgGvG{HrLiCnFqOx`@??u~B`mG??kiC|cHaQhg@sGdWeFlXyR|yA??qkAdbJ??udBjyMaFlb@_AvQObPPvMh@pL|@rKjBfNnCzN`F`ScAzAvJtSpH|St@jDx@jI??jBqD|iE~rHtDlIbDdJdF`SnDrTlCx[??xk@prJ??ni@t}IbAlUVlVs@nmEUvQe@zLu@xLcB~Po`@pyC??i_ArgH_D|YmAhQu@pQ[tQGd[x@rfVYlVuA`VoBzP}DpT??cHv[wFnR}HnQaIhMuo@pv@}aFngG??w_D~zDiP~VoUpe@???B??_~AveDh@zAiDlDqBdDoCpFs\\zs@??iJ~SoL~\\oF|ReQhx@??k}@deE??yX~pA{C~OsCdU}@vLg@|LQbMBbMf@vQv@xLjAnL~AdLnM~r@bBbLbBbQbAfVAd[mA|ZwAfQ}Hlm@??wBjSkAjQ}Bz{@w@pQyBtUiClPiDnOwCtJijAdiDgCdKuBtKuCdU_AvLi@|LSbM@bMxMbsFRzQQvQsAbVoAnLiB~KkDnO}Mfa@mC~J}DhToCvV??oFlk@qBj_@s@d[Gb\\G@Fv@H`[WNPxGxBz_@bDv^tBnP~QrmA~CxOfEvNdFjM|FnK??fHtJjR|Q|E`GpGfKpFzLpEfNjDpOhB~KjFpb@vCbQPMdExPbDbJvDjInGjKfQzT`IjOhG~QfE~S??QJxBxRbAjQ????fApQjApLhB|K|BpKlC~JpEfNfOx_@???@????tErMpDjO`CnPjAjQDd[gEfx@VD??MxBWGiNhlC??qBb^PDQEcB|SqBzP{Gpa@qDhOmElNsQ|e@??}Whn@e^v|@??\\l@a@|@wm@~zAEKDJkBvEKO_nAj|CgEhKDHBFyHbSMOoQdk@aJr_@cBnI@@HD{@jI{Bh_@oFph@B@CAoJzk@{AjNoAlGuIvZ_CjK}CjJiCbK_AxGkAlQ_HxV}BvEuC|CmDfAiGh@cFEoG~AiEg@ED`@~B",
							"crdEncZ": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
							"crdEncS": "NNMNNNLNNNNLNLNNNLNNNNKNNNNNNNNNNNNNNLNNNNLNNNNNNNNNNNNNNNNNNNNNNNNKNNNNNNNNLNNNNNNKNNNNNNNNNNNLMLMKMNNMNNNNNNMNNLNNNNNNNNNNNNNNLNNMNMNNMNNKNNNLNNNNNNNNNKNNMNNNNMMNNNMNMNLNKNNNMNNNKNNNNLNMNMNMNMNNNNNNMNNNNNLNMNKNKNLNMNKNNNNMNMNNNNNLNMNKNKNLNNNNKNNNNKNNNNNNNNMNNKNKNNNNNKNLNNNNMNNMNMNLNNNNNNNNNNKNNNNMNMNNNNKNNKNKNLNKNKNMNNNMNNLNKNMNLNNKNNKNKNNLNNKNMLNMNNNNMNNNNNKNNLNMNMNNMLNMNMNKLNNNKNMNNNNNNMNNNKNKNKNNNNNNMNMNNNNNNNNNNNNLNNLNNNKNNNNNNNNNNNNNNNNNNNNKNNNNNLNKKKNLNNMNLNMNNNN",
							"crdEncF": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
							"ppLocRefL": [
								{
									"ppIdx": 0,
									"locX": 0
								},
								{
									"ppIdx": 474,
									"locX": 2
								}
							]
						},
						"ctxRecon": "T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271038$202007271234$ICE  696$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL"
								]
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 2,
								"prio": 240,
								"fIdx": -1,
								"tIdx": -1,
								"tagL": [
									"RES_CON_FTR_H3"
								]
							}
						],
						"subscr": "F",
						"dTrnCmpSX": {
							"tcocX": [
								0,
								1
							]
						}
					},
					"resState": "N",
					"resRecommendation": "N"
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271038$202007271234$ICE  696$$1$$$",
			"trfRes": {
				"statusCode": "OK",
				"fareSetL": [
					{
						"fareL": [
							{
								"price": { "amount": 6990 },
								"isFromPrice": true,
								"isBookable": true,
								"isUpsell": false,
								"targetCtx": "D",
								"buttonText": "Continue to booking"
							}
						]
					}
				]
			},
			"conSubscr": "F",
			"resState": "N",
			"resRecommendation": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20200726",
				"jid": "1|244757|0|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "132949"
			},
			"cksum": "cdf4550c_3",
			"dTrnCmpSX": {
				"tcocX": [
					0,
					1
				]
			}
		},
		{
			"cid": "C-1",
			"date": "20200727",
			"dur": "020100",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 27. Jul until 3. Aug 2020 Mo, Tu, Sa, Su ",
				"sDaysB": "00000000000000000000000000000000000000000000000000000006638000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 8,
				"dProdX": 1,
				"dPlatfS": "8",
				"dInR": true,
				"dTimeS": "114000",
				"dProgType": "PROGNOSED",
				"dTZOffset": 120,
				"type": "N"
			},
			"arr": {
				"locX": 2,
				"idx": 10,
				"aPlatfS": "8",
				"aOutR": true,
				"aTimeS": "134100",
				"aProgType": "PROGNOSED",
				"aTZOffset": 120,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 0,
					"dep": {
						"locX": 0,
						"idx": 8,
						"dProdX": 1,
						"dPlatfS": "8",
						"dInR": true,
						"dTimeS": "114000",
						"dProgType": "PROGNOSED",
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 2,
						"idx": 10,
						"aPlatfS": "8",
						"aOutR": true,
						"aTimeS": "134100",
						"aProgType": "PROGNOSED",
						"aTZOffset": 120,
						"type": "N"
					},
					"jny": {
						"jid": "1|243213|0|80|27072020",
						"prodX": 1,
						"dirTxt": "Hamburg-Altona",
						"status": "P",
						"isRchbl": true,
						"poly": {
							"delta": true,
							"dim": 3,
							"type": "WGS84",
							"crdEncYX": "q}q_IqbrpA@BeMfIyHvH_A_D??sEnGwNzO??h@jB{EjFgF`GgB`DiAdDoArHHBFB[|F?dGn@dNq@L??`BvTfA`T??nApPn@zKXGYFtB|\\SDRE`Cr`@??N~BDAWHrPp`ClEjs@??@@TGrDhg@z@dQlLbwEF?DAnApj@M|^mA~NoHj`@qBbZUEAtCeCpg@JB??mGf_AOC@@kBjYq@OuBpUcH`]h@d@qB|N[O}BbViElj@rAf@aA]sA|NCAB@eMjwAiFf_@yFt_@st@zmE??rAaI??qRfkA??aSdiAyXjbB??c}@hnF??w]zuB??????od@foCcMlv@??sSzoA}Lpq@geAxnGoUdsAkWv}AuLtv@{S~kA??mHpe@gHt^ey@z|C??owFp~S??qp@deCqHxUiItS??aInPiItNw~HrvM??q|DhwG??a{OnaX??gZjg@uFlJO[s\\`k@??P\\yj@`aAcD|H{EnPc}CjjNyDbTcCdUeA|UIdVvLn~HdBvc@p[jiG~@|c@@rQUhS??y[jtMaArZcAdQaEvb@ydA`eI??mJjh@_I~ZujIx_W??kRvl@_Vz~@kDjOoeBf_JsTjkAgD`UkCf\\mCvaAeRxoI[nTLle@_@fLkAYjAXeAnLyB~LqEpNkD|G}ExG}CrCyG`EkKrEiLzE??eMhD_OhBi`AxH??en@lEkiJ~u@??s`NvhA??myDrZcJnA_U~FaOnGuSpMyMfLeMbNmL|OsKpQiNhZaoCvyH??ub@bmA??m}EhfNyIlTkSv`@??gkDjbHjDbHkDcHqH|MqHrKgLhMcLdJgHdEaIbDqWfFmGbBoHnD{FhEgGvG{HrLiCnFqOx`@??u~B`mG??kiC|cHaQhg@sGdWeFlXyR|yA??qkAdbJ??udBjyMaFlb@_AvQObPPvMh@pL|@rKjBfNnCzN`F`ScAzAvJtSpH|St@jDx@jI??jBqD|iE~rHtDlIbDdJdF`SnDrTlCx[??xk@prJ??ni@t}IbAlUVlVs@nmEUvQe@zLu@xLcB~Po`@pyC??i_ArgH_D|YmAhQu@pQ[tQGd[x@rfVYlVuA`VoBzP}DpT??cHv[wFnR}HnQaIhMuo@pv@}aFngG??w_D~zDiP~VoUpe@???B??_~AveDh@zAiDlDqBdDoCpFs\\zs@??iJ~SoL~\\oF|ReQhx@??k}@deE??yX~pA{C~OsCdU}@vLg@|LQbMBbMf@vQv@xLjAnL~AdLnM~r@bBbLbBbQbAfVAd[mA|ZwAfQ}Hlm@??wBjSkAjQ}Bz{@w@pQyBtUiClPiDnOwCtJijAdiDgCdKuBtKuCdU_AvLi@|LSbM@bMxMbsFRzQQvQsAbVoAnLiB~KkDnO}Mfa@mC~J}DhToCvV??oFlk@qBj_@s@d[Gb\\G@Fv@H`[WNPxGxBz_@bDv^tBnP~QrmA~CxOfEvNdFjM|FnK??fHtJjR|Q|E`GpGfKpFzLpEfNjDpOhB~KjFpb@vCbQPMdExPbDbJvDjInGjKfQzT`IjOhG~QfE~S??QJxBxRbAjQ????fApQjApLhB|K|BpKlC~JpEfNfOx_@???@????tErMpDjO`CnPjAjQDd[gEfx@VD??MxBWGiNhlC??qBb^PDQEcB|SqBzP{Gpa@qDhOmElNsQ|e@??}Whn@e^v|@??\\l@a@|@wm@~zAEKDJkBvEKO_nAj|CgEhKDHBFyHbSMOoQdk@aJr_@cBnI@@HD{@jI{Bh_@oFph@B@CAoJzk@{AjNoAlGuIvZ_CjK}CjJiCbK_AxGkAlQ_HxV}BvEuC|CmDfAiGh@cFEoG~AiEg@ED`@~B",
							"crdEncZ": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
							"crdEncS": "NNMNNNLNNNNLNLNNNLNNNNKNNNNNNNNNNNNNNLNNNNLNNNNNNNNNNNNNNNNNNNNNNNNKNNNNNNNNLNNNNNNKNNNNNNNNNNNLMLMKMNNMNNNNNNMNNLNNNNNNNNNNNNNNLNNMNMNNMNNKNNNLNNNNNNNNNKNNMNNNNMMNNNMNMNLNKNNNMNNNKNNNNLNMNMNMNMNNNNNNMNNNNNLNMNKNKNLNMNKNNNNMNMNNNNNLNMNKNKNLNNNNKNNNNKNNNNNNNNMNNKNKNNNNNKNLNNNNMNNMNMNLNNNNNNNNNNKNNNNMNMNNNNKNNKNKNLNKNKNMNNNMNNLNKNMNLNNKNNKNKNNLNNKNMLNMNNNNMNNNNNKNNLNMNMNNMLNMNMNKLNNNKNMNNNNNNMNNNKNKNKNNNNNNMNMNNNNNNNNNNNNLNNLNNNKNNNNNNNNNNNNNNNNNNNNKNNNNNLNKKKNLNNMNLNMNNNN",
							"crdEncF": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
							"ppLocRefL": [
								{
									"ppIdx": 0,
									"locX": 0
								},
								{
									"ppIdx": 474,
									"locX": 2
								}
							]
						},
						"ctxRecon": "T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271140$202007271341$ICE  602$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 8,
								"tIdx": 10,
								"tagL": [
									"RES_JNY_DTL"
								]
							},
							{
								"type": "REM",
								"remX": 3,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 8,
								"tIdx": 10,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 4,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 8,
								"tIdx": 10,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 8,
								"tIdx": 10,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 5,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 8,
								"tIdx": 10,
								"tagL": [
									"RES_JNY_DTL"
								]
							},
							{
								"type": "REM",
								"remX": 6,
								"prio": 240,
								"fIdx": -1,
								"tIdx": -1,
								"tagL": [
									"RES_CON_FTR_H3"
								]
							}
						],
						"subscr": "F",
						"dTrnCmpSX": {
							"tcocX": [
								0,
								2
							]
						}
					},
					"resState": "N",
					"resRecommendation": "N"
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271140$202007271341$ICE  602$$1$$$",
			"trfRes": {
				"statusCode": "OK",
				"fareSetL": [
					{
						"fareL": [
							{
								"price": { "amount": 6990 },
								"isFromPrice": true,
								"isBookable": true,
								"isUpsell": false,
								"targetCtx": "D",
								"buttonText": "Continue to booking"
							}
						]
					}
				]
			},
			"conSubscr": "F",
			"resState": "N",
			"resRecommendation": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20200726",
				"jid": "1|243213|0|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "132949"
			},
			"cksum": "98e53541_3",
			"dTrnCmpSX": {
				"tcocX": [
					0,
					2
				]
			}
		},
		{
			"cid": "C-2",
			"date": "20200727",
			"dur": "021400",
			"chg": 0,
			"sDays": {
				"sDaysR": "runs 26. until 28. Jul 2020 ",
				"sDaysB": "00000000000000000000000000000000000000000000000000000007E00000000000000000000000000000000000"
			},
			"dep": {
				"locX": 0,
				"idx": 9,
				"dProdX": 2,
				"dPlatfS": "7",
				"dInR": true,
				"dTimeS": "123800",
				"dProgType": "PROGNOSED",
				"dTZOffset": 120,
				"type": "N"
			},
			"arr": {
				"locX": 2,
				"idx": 11,
				"aPlatfS": "5",
				"aOutR": true,
				"aTimeS": "145200",
				"aProgType": "PROGNOSED",
				"aTZOffset": 120,
				"type": "N"
			},
			"secL": [
				{
					"type": "JNY",
					"icoX": 0,
					"dep": {
						"locX": 0,
						"idx": 9,
						"dProdX": 2,
						"dPlatfS": "7",
						"dInR": true,
						"dTimeS": "123800",
						"dProgType": "PROGNOSED",
						"dTZOffset": 120,
						"type": "N"
					},
					"arr": {
						"locX": 2,
						"idx": 11,
						"aPlatfS": "5",
						"aOutR": true,
						"aTimeS": "145200",
						"aProgType": "PROGNOSED",
						"aTZOffset": 120,
						"type": "N"
					},
					"jny": {
						"jid": "1|246102|0|80|27072020",
						"prodX": 2,
						"dirTxt": "Hamburg-Altona",
						"status": "P",
						"isRchbl": true,
						"poly": {
							"delta": true,
							"dim": 3,
							"type": "WGS84",
							"crdEncYX": "q}q_IqbrpA@BeMfIyHvH_A_D??sEnGwNzO??h@jB{EjFgF`GgB`DiAdDoArHHBFB[|F?dGn@dNq@L??`BvTfA`T??nApPn@zKXGYFtB|\\SDRE`Cr`@??N~BDAWHrPp`ClEjs@??@@TGrDhg@z@dQlLbwEF?DAnApj@M|^mA~NoHj`@qBbZUEAtCeCpg@JB??mGf_AOC@@kBjYq@OuBpUcH`]h@d@qB|N[O}BbViElj@rAf@aA]sA|NCAB@eMjwAiFf_@yFt_@st@zmE??rAaI??qRfkA??aSdiAyXjbB??c}@hnF??w]zuB??????od@foCcMlv@??sSzoA}Lpq@geAxnGoUdsAkWv}AuLtv@{S~kA??mHpe@gHt^ey@z|C??owFp~S??qp@deCqHxUiItS??aInPiItNw~HrvM??q|DhwG??a{OnaX??gZjg@uFlJO[s\\`k@??P\\yj@`aAcD|H{EnPc}CjjNyDbTcCdUeA|UIdVvLn~HdBvc@p[jiG~@|c@@rQUhS??y[jtMaArZcAdQaEvb@ydA`eI??mJjh@_I~ZujIx_W??kRvl@_Vz~@kDjOoeBf_JsTjkAgD`UkCf\\mCvaAeRxoI[nTLle@_@fLkAYjAXeAnLyB~LqEpNkD|G}ExG}CrCyG`EkKrEiLzE??eMhD_OhBi`AxH??en@lEkiJ~u@??s`NvhA??myDrZcJnA_U~FaOnGuSpMyMfLeMbNmL|OsKpQiNhZaoCvyH??ub@bmA??m}EhfNyIlTkSv`@??gkDjbHjDbHkDcHqH|MqHrKgLhMcLdJgHdEaIbDqWfFmGbBoHnD{FhEgGvG{HrLiCnFqOx`@??u~B`mG??kiC|cHaQhg@sGdWeFlXyR|yA??qkAdbJ??udBjyMaFlb@_AvQObPPvMh@pL|@rKjBfNnCzN`F`ScAzAvJtSpH|St@jDx@jI??jBqD|iE~rHtDlIbDdJdF`SnDrTlCx[??xk@prJ??ni@t}IbAlUVlVs@nmEUvQe@zLu@xLcB~Po`@pyC??i_ArgH_D|YmAhQu@pQ[tQGd[x@rfVYlVuA`VoBzP}DpT??cHv[wFnR}HnQaIhMuo@pv@}aFngG??w_D~zDiP~VoUpe@???B??_~AveDh@zAiDlDqBdDoCpFs\\zs@??iJ~SoL~\\oF|ReQhx@??k}@deE??yX~pA{C~OsCdU}@vLg@|LQbMBbMf@vQv@xLjAnL~AdLnM~r@bBbLbBbQbAfVAd[mA|ZwAfQ}Hlm@??wBjSkAjQ}Bz{@w@pQyBtUiClPiDnOwCtJijAdiDgCdKuBtKuCdU_AvLi@|LSbM@bMxMbsFRzQQvQsAbVoAnLiB~KkDnO}Mfa@mC~J}DhToCvV??oFlk@qBj_@s@d[Gb\\G@Fv@H`[WNPxGxBz_@bDv^tBnP~QrmA~CxOfEvNdFjM|FnK??fHtJjR|Q|E`GpGfKpFzLpEfNjDpOhB~KjFpb@vCbQPMdExPbDbJvDjInGjKfQzT`IjOhG~QfE~S??QJxBxRbAjQ????fApQjApLhB|K|BpKlC~JpEfNfOx_@???@????tErMpDjO`CnPjAjQDd[gEfx@VD??MxBWGiNhlC??qBb^PDQEcB|SqBzP{Gpa@qDhOmElNsQ|e@??}Whn@e^v|@??\\l@a@|@wm@~zAEKDJkBvEKO_nAj|CgEhKDHBFyHbSMOoQdk@aJr_@cBnI@@HD{@jI{Bh_@oFph@B@CAoJzk@{AjNoAlGuIvZ_CjK}CjJiCbK_AxGkAlQ_HxV}BvEuC|CmDfAiGh@cFEoG~AiEg@ED`@~B",
							"crdEncZ": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
							"crdEncS": "NNMNNNLNNNNLNLNNNLNNNNKNNNNNNNNNNNNNNLNNNNLNNNNNNNNNNNNNNNNNNNNNNNNKNNNNNNNNLNNNNNNKNNNNNNNNNNNLMLMKMNNMNNNNNNMNNLNNNNNNNNNNNNNNLNNMNMNNMNNKNNNLNNNNNNNNNKNNMNNNNMMNNNMNMNLNKNNNMNNNKNNNNLNMNMNMNMNNNNNNMNNNNNLNMNKNKNLNMNKNNNNMNMNNNNNLNMNKNKNLNNNNKNNNNKNNNNNNNNMNNKNKNNNNNKNLNNNNMNNMNMNLNNNNNNNNNNKNNNNMNMNNNNKNNKNKNLNKNKNMNNNMNNLNKNMNLNNKNNKNKNNLNNKNMLNMNNNNMNNNNNKNNLNMNMNNMLNMNMNKLNNNKNMNNNNNNMNNNKNKNKNNNNNNMNMNNNNNNNNNNNNLNNLNNNKNNNNNNNNNNNNNNNNNNNNKNNNNNLNKKKNLNNMNLNMNNNN",
							"crdEncF": "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
							"ppLocRefL": [
								{
									"ppIdx": 0,
									"locX": 0
								},
								{
									"ppIdx": 474,
									"locX": 2
								}
							]
						},
						"ctxRecon": "T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271238$202007271452$ICE  802$$1$$$",
						"msgL": [
							{
								"type": "REM",
								"remX": 0,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL"
								]
							},
							{
								"type": "REM",
								"remX": 3,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 4,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 1,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL_L"
								]
							},
							{
								"type": "REM",
								"remX": 5,
								"fLocX": 0,
								"tLocX": 2,
								"fIdx": 9,
								"tIdx": 11,
								"tagL": [
									"RES_JNY_DTL"
								]
							},
							{
								"type": "REM",
								"remX": 7,
								"prio": 240,
								"fIdx": -1,
								"tIdx": -1,
								"tagL": [
									"RES_CON_FTR_H3"
								]
							}
						],
						"subscr": "F",
						"dTrnCmpSX": {
							"tcocX": [
								0,
								1
							]
						}
					},
					"resState": "N",
					"resRecommendation": "N"
				}
			],
			"ctxRecon": "¶HKI¶T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271238$202007271452$ICE  802$$1$$$",
			"trfRes": {
				"statusCode": "OK",
				"fareSetL": [
					{
						"fareL": [
							{
								"prc": 5990,
								"isFromPrice": true,
								"isBookable": true,
								"isUpsell": false,
								"targetCtx": "D",
								"buttonText": "Continue to booking"
							}
						]
					}
				]
			},
			"conSubscr": "F",
			"resState": "N",
			"resRecommendation": "N",
			"recState": "U",
			"sotRating": 0,
			"isSotCon": false,
			"showARSLink": false,
			"sotCtxt": {
				"cnLocX": 0,
				"calcDate": "20200726",
				"jid": "1|246102|0|80|-1",
				"locMode": "FROM_START",
				"pLocX": 0,
				"reqMode": "UNKNOWN",
				"sectX": 0,
				"calcTime": "132949"
			},
			"cksum": "bbe9b8dd_3",
			"dTrnCmpSX": {
				"tcocX": [
					0,
					1
				]
			}
		}
	],
	"outCtxScrB": "2|OB|MT#11#327518#327518#327634#327634#0#0#485#327476#1#-2147482598#0#1#2|PDH#75e25308610ed872d1e38869082dfcf9|RD#27072020|RT#95600|US#1",
	"outCtxScrF": "2|OF|MT#11#327638#327638#327772#327772#0#0#485#327581#3#-2147482598#0#1#2|PDH#75e25308610ed872d1e38869082dfcf9|RD#27072020|RT#95600|US#1",
	"fpB": "20191215",
	"fpE": "20201212",
	"bfATS": -1,
	"bfIOSTS": -1,
	"planrtTS": "1595762840"
}
const dbJourney: Journey = {
	type: 'journey',
	legs: [
		{
			origin: {
				type: 'stop',
				id: '8000207',
				name: 'Köln Hbf',
				location: {
					type: 'location',
					id: '8000207',
					latitude: 50.942823,
					longitude: 6.959197,
				},
				products: {
					nationalExpress: true,
					national: true,
					regionalExpress: true,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: false,
					tram: true,
					taxi: false,
				},
			},
			destination: {
				type: 'stop',
				id: '8073368',
				name: 'Köln Messe/Deutz Gl.11-12',
				location: {
					type: 'location',
					id: '8073368',
					latitude: 50.940602,
					longitude: 6.975162,
				},
				products: {
					nationalExpress: true,
					national: true,
					regionalExpress: true,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: false,
					tram: true,
					taxi: false,
				},
				station: {
					type: 'station',
					id: '8003368',
					name: 'Köln Messe/Deutz',
					location: {
						type: 'location',
						id: '8003368',
						latitude: 50.940989,
						longitude: 6.974578,
					},
					products: {
						nationalExpress: true,
						national: true,
						regionalExpress: true,
						regional: true,
						suburban: true,
						bus: true,
						ferry: false,
						subway: false,
						tram: true,
						taxi: false,
					},
				},
			},
			arrival: '2020-04-11T05:20:00+02:00',
			plannedArrival: '2020-04-11T05:20:00+02:00',
			arrivalDelay: null,
			departure: '2020-04-11T05:17:00+02:00',
			plannedDeparture: '2020-04-11T05:17:00+02:00',
			departureDelay: null,
			public: true,
			walking: true,
			distance: null,
			transfer: true,
		},
		{
			origin: {
				type: 'stop',
				id: '8073368',
				name: 'Köln Messe/Deutz Gl.11-12',
				location: {
					type: 'location',
					id: '8073368',
					latitude: 50.940602,
					longitude: 6.975162,
				},
				products: {
					nationalExpress: true,
					national: true,
					regionalExpress: true,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: false,
					tram: true,
					taxi: false,
				},
				station: {
					type: 'station',
					id: '8003368',
					name: 'Köln Messe/Deutz',
					location: {
						type: 'location',
						id: '8003368',
						latitude: 50.940989,
						longitude: 6.974578,
					},
					products: {
						nationalExpress: true,
						national: true,
						regionalExpress: true,
						regional: true,
						suburban: true,
						bus: true,
						ferry: false,
						subway: false,
						tram: true,
						taxi: false,
					},
				},
			},
			destination: {
				type: 'stop',
				id: '8000284',
				name: 'Nürnberg Hbf',
				location: {
					type: 'location',
					id: '8000284',
					latitude: 49.445435,
					longitude: 11.08227,
				},
				products: {
					nationalExpress: true,
					national: true,
					regionalExpress: false,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: true,
					tram: true,
					taxi: false,
				},
			},
			arrival: '2020-04-11T09:01:00+02:00',
			plannedArrival: '2020-04-11T09:01:00+02:00',
			arrivalDelay: null,
			arrivalPrognosisType: 'prognosed',
			departure: '2020-04-11T05:20:00+02:00',
			plannedDeparture: '2020-04-11T05:20:00+02:00',
			departureDelay: null,
			departurePrognosisType: 'prognosed',
			reachable: true,
			tripId: '1|301001|0|80|11042020',
			line: {
				type: 'line',
				id: 'ice-523',
				fahrtNr: '523',
				name: 'ICE 523',
				public: true,
				adminCode: '80____',
				productName: 'ICE',
				mode: 'train',
				product: 'nationalExpress',
				operator: {
					type: 'operator',
					id: 'db-fernverkehr-ag',
					name: 'DB Fernverkehr AG',
				},
			},
			direction: 'München Hbf',
			arrivalPlatform: '9',
			plannedArrivalPlatform: '9',
			departurePlatform: '11',
			plannedDeparturePlatform: '11',
			remarks: [
				{
					text: 'Komfort Check-in möglich (Infos unter bahn.de/kci)',
					type: 'hint',
					code: 'komfort-checkin',
					summary: 'Komfort-Checkin available',
				},
			],
		},
	],
	refreshToken: '¶HKI¶D$A=1@O=Köln Hbf@L=8000207@a=128@$A=1@O=Köln Messe/Deutz Gl.11-12@L=8073368@a=128@$202004110517$202004110520$$$1$§T$A=1@O=Köln Messe/Deutz Gl.11-12@L=8073368@a=128@$A=1@O=Nürnberg Hbf@L=8000284@a=128@$202004110520$202004110901$ICE  523$$1$',
	price: {amount: 49.9, currency: 'EUR', hint: null},
};

export {
	dbJourney,
};
const dbJourneyPolyline: Journey = {
	type: 'journey',
	legs: [
		{
			origin: {
				type: 'stop',
				id: '8098160',
				name: 'Berlin Hbf (tief)',
				location: {
					type: 'location',
					id: '8098160',
					latitude: 52.52585,
					longitude: 13.368892,
				},
				products: {
					nationalExpress: true,
					national: true,
					regionalExpress: true,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: false,
					tram: true,
					taxi: false,
				},
				station: {
					type: 'station',
					id: '8011160',
					name: 'Berlin Hbf',
					location: {
						type: 'location',
						id: '8011160',
						latitude: 52.524924,
						longitude: 13.369629,
					},
					products: {
						nationalExpress: true,
						national: true,
						regionalExpress: true,
						regional: true,
						suburban: true,
						bus: true,
						ferry: false,
						subway: false,
						tram: true,
						taxi: false,
					},
				},
			},
			destination: {
				type: 'stop',
				id: '8002549',
				name: 'Hamburg Hbf',
				location: {
					type: 'location',
					id: '8002549',
					latitude: 53.553533,
					longitude: 10.00636,
				},
				products: {
					nationalExpress: true,
					national: true,
					regionalExpress: true,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: true,
					tram: false,
					taxi: false,
				},
			},
			arrival: '2020-07-27T12:34:00+02:00',
			plannedArrival: '2020-07-27T12:34:00+02:00',
			arrivalDelay: null,
			arrivalPrognosisType: 'prognosed',
			departure: '2020-07-27T10:38:00+02:00',
			plannedDeparture: '2020-07-27T10:38:00+02:00',
			departureDelay: null,
			departurePrognosisType: 'prognosed',
			reachable: true,
			polyline: {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {
							type: 'stop',
							id: '8098160',
							name: 'Berlin Hbf (tief)',
							location: {
								type: 'location',
								id: '8098160',
								latitude: 52.52585,
								longitude: 13.368892,
							},
							products: {
								nationalExpress: true,
								national: true,
								regionalExpress: true,
								regional: true,
								suburban: true,
								bus: true,
								ferry: false,
								subway: false,
								tram: true,
								taxi: false,
							},
							station: {
								type: 'station',
								id: '8011160',
								name: 'Berlin Hbf',
								location: {
									type: 'location',
									id: '8011160',
									latitude: 52.524924,
									longitude: 13.369629,
								},
								products: {
									nationalExpress: true,
									national: true,
									regionalExpress: true,
									regional: true,
									suburban: true,
									bus: true,
									ferry: false,
									subway: false,
									tram: true,
									taxi: false,
								},
							},
						},
						geometry: {
							type: 'Point',
							coordinates: [13.36889, 52.52585],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36723, 52.52811],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36567, 52.52968],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36647, 52.53],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36647, 52.53],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36511, 52.53106],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36241, 52.53358],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36241, 52.53358],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36187, 52.53337],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.36069, 52.53447],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.3594, 52.53563],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.35859, 52.53615],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.35776, 52.53652],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.35622, 52.53692],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.3562, 52.53687],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.35618, 52.53683],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.35491, 52.53697],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.3536, 52.53697],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.35117, 52.53673],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.3511, 52.53698],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.3511, 52.53698],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.34762, 52.53649],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.34425, 52.53613],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.34425, 52.53613],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.34144, 52.53573],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.33938, 52.53549],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.33942, 52.53536],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.33938, 52.53549],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.33459, 52.5349],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.33456, 52.535],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.33459, 52.5349],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.32921, 52.53425],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.32921, 52.53425],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.32857, 52.53417],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.32858, 52.53414],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.32853, 52.53426],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.3078, 52.53144],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.29942, 52.53041],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.29942, 52.53041],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.29941, 52.5304],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.29945, 52.53029],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.293, 52.52939],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.29009, 52.52909],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.25551, 52.52694],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.25551, 52.5269],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.25552, 52.52687],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.24855, 52.52647],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.24344, 52.52654],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.24088, 52.52693],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.23554, 52.52845],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.2312, 52.52902],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.23123, 52.52913],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.23048, 52.52914],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.22399, 52.52981],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.22397, 52.52975],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.22397, 52.52975],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.21369, 52.5311],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.21371, 52.53118],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.2137, 52.53117],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.20948, 52.53171],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.20956, 52.53196],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.20595, 52.53255],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.20114, 52.53401],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.20095, 52.5338],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.1984, 52.53437],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.19848, 52.53451],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.19478, 52.53514],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.18783, 52.53615],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.18763, 52.53573],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.18778, 52.53606],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.18523, 52.53648],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.18524, 52.5365],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.18523, 52.53648],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.17109, 52.53875],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.16593, 52.53992],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.1607, 52.54117],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.1276, 52.54975],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.1276, 52.54975],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.12921, 52.54933],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.12921, 52.54933],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.11701, 52.55246],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.11701, 52.55246],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.10514, 52.55567],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.08924, 52.5598],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.08924, 52.5598],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.05095, 52.56974],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.05095, 52.56974],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.03193, 52.57466],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.03193, 52.57466],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.03193, 52.57466],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.03193, 52.57466],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [13.00885, 52.58066],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.99998, 52.58292],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.99998, 52.58292],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.98704, 52.58622],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.97895, 52.58845],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.93546, 52.59969],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.92199, 52.60329],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.90683, 52.60719],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.89792, 52.60938],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.8856, 52.61272],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.8856, 52.61272],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.87943, 52.61423],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.87436, 52.61571],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.8491, 52.62502],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.8491, 52.62502],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.74165, 52.66478],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.74165, 52.66478],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.72018, 52.67271],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.71653, 52.67424],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.71322, 52.67589],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.71322, 52.67589],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.71042, 52.6775],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.70791, 52.67915],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.63245, 52.73031],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.63245, 52.73031],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.5876, 52.76064],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.5876, 52.76064],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.4592, 52.84705],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.4592, 52.84705],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.45274, 52.85141],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.45091, 52.85264],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.45105, 52.85272],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.444, 52.85746],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.444, 52.85746],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.44385, 52.85737],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.43328, 52.86438],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.43169, 52.8652],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.42889, 52.8663],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.35027, 52.8916],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.34689, 52.89253],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.34334, 52.89319],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.33967, 52.89354],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.33596, 52.89359],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.28484, 52.89139],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.27896, 52.89088],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.23634, 52.88631],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.23043, 52.88599],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.22745, 52.88598],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.2242, 52.88609],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.2242, 52.88609],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.1491, 52.8907],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.14468, 52.89103],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.14177, 52.89137],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.13605, 52.89234],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.08388, 52.90351],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.08388, 52.90351],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.07726, 52.90534],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [12.07278, 52.90694],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.94977, 52.96001],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.94977, 52.96001],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.94245, 52.96311],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.93223, 52.96679],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.92961, 52.96765],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.87325, 52.98405],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.86103, 52.98751],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.8575, 52.98835],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.85282, 52.98905],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.84214, 52.98976],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.78825, 52.99283],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.78481, 52.99297],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.77866, 52.9929],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.77654, 52.99306],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.77667, 52.99344],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.77654, 52.99306],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.77438, 52.99341],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.77214, 52.99402],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76965, 52.99507],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76822, 52.99593],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76681, 52.99704],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76607, 52.99783],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.7651, 52.99924],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76404, 53.00122],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76294, 53.00335],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76294, 53.00335],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76209, 53.00562],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.76156, 53.00818],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.75999, 53.01863],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.75999, 53.01863],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.75896, 53.02618],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.75016, 53.08416],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.75016, 53.08416],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.73836, 53.16122],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.73836, 53.16122],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.73394, 53.19105],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.73354, 53.19283],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.73226, 53.19635],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.7309, 53.19892],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.72857, 53.20223],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.72645, 53.2046],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.72403, 53.20687],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.72132, 53.20902],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.71835, 53.21104],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.71398, 53.21349],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.66362, 53.23654],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.66362, 53.23654],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.65112, 53.24225],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.65112, 53.24225],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.57315, 53.27784],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.56972, 53.27957],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.56432, 53.28283],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.56432, 53.28283],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.5177, 53.31039],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.51624, 53.30953],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.5177, 53.31039],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.51531, 53.31192],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.51329, 53.31345],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.511, 53.31557],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50921, 53.31767],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50822, 53.31915],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.5074, 53.32076],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50624, 53.32469],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50574, 53.32604],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50486, 53.32756],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50385, 53.32882],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50245, 53.33014],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.50027, 53.33172],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.49907, 53.33241],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.49366, 53.33506],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.49366, 53.33506],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.45045, 53.35549],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.45045, 53.35549],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.40358, 53.37763],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.39713, 53.38052],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.39326, 53.3819],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.38919, 53.38305],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.37464, 53.38622],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.37464, 53.38622],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.31781, 53.39847],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.31781, 53.39847],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.24191, 53.41474],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.23624, 53.41587],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.23324, 53.41619],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.2305, 53.41627],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.22814, 53.41618],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.22597, 53.41597],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.22395, 53.41566],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.22151, 53.41512],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.21897, 53.4144],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.21576, 53.41327],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.2153, 53.41361],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.21199, 53.41173],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.20864, 53.4102],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.20778, 53.40993],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.20612, 53.40964],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.20612, 53.40964],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.20701, 53.4091],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.15773, 53.37663],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.15606, 53.37572],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.15427, 53.3749],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.15106, 53.37375],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.1476, 53.37287],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.14299, 53.37216],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.14299, 53.37216],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.08354, 53.36499],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.08354, 53.36499],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.02743, 53.35819],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.02384, 53.35785],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [11.02009, 53.35773],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.98705, 53.35799],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.98405, 53.3581],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.98183, 53.35829],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.97962, 53.35856],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.97674, 53.35906],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.95201, 53.36442],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.95201, 53.36442],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.90455, 53.37471],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.90024, 53.37551],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.89731, 53.3759],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.89434, 53.37617],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.89135, 53.37631],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.88684, 53.37635],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.76786, 53.37606],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.76411, 53.37619],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.76042, 53.37662],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.75756, 53.37718],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.75411, 53.37813],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.75411, 53.37813],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.74951, 53.37959],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.74639, 53.38083],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.74343, 53.38242],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.74114, 53.38403],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.73225, 53.39182],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.68993, 53.42813],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.68993, 53.42813],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.65985, 53.45385],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.65601, 53.45662],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.64984, 53.46022],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.64984, 53.46022],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.64982, 53.46022],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.64982, 53.46022],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.62314, 53.47542],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.62268, 53.47521],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.62181, 53.47606],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.62098, 53.47663],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.61977, 53.47735],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.61131, 53.48209],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.61131, 53.48209],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.60795, 53.4839],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.60315, 53.48606],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.59996, 53.48726],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.59079, 53.49017],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.59079, 53.49017],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.55908, 53.50015],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.55908, 53.50015],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.54596, 53.50428],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.54324, 53.50506],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.53969, 53.5058],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.53749, 53.50611],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.53526, 53.50631],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.533, 53.5064],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.53074, 53.50638],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.52774, 53.50618],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.52553, 53.5059],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.52337, 53.50552],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.52126, 53.50504],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.51294, 53.50272],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.51084, 53.50222],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.50794, 53.50172],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.50422, 53.50138],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.49971, 53.50139],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.49524, 53.50178],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.49232, 53.50222],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.48489, 53.50381],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.48489, 53.50381],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.48163, 53.50441],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.47869, 53.50479],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.46895, 53.50542],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.46598, 53.5057],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.46235, 53.50631],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.45956, 53.507],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.45692, 53.50785],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.45505, 53.50861],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.42782, 53.52066],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.42587, 53.52134],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.42384, 53.52193],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.42029, 53.52268],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.41809, 53.523],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.41586, 53.52321],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.4136, 53.52331],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.41134, 53.5233],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.37228, 53.52093],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.36926, 53.52083],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.36626, 53.52092],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.36256, 53.52134],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.3604, 53.52174],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.35832, 53.52227],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.35568, 53.52313],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.3502, 53.52552],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.34828, 53.52623],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.34487, 53.52718],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.34107, 53.5279],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.34107, 53.5279],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.33396, 53.5291],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.32878, 53.52967],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.32427, 53.52993],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.31961, 53.52997],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.3196, 53.53001],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.31932, 53.52997],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.31483, 53.52992],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.31475, 53.53004],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.31334, 53.52995],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.30808, 53.52934],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.303, 53.52852],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.3002, 53.52793],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.28762, 53.52489],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.28493, 53.52409],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.28241, 53.52309],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.28011, 53.52194],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.27811, 53.52067],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.27811, 53.52067],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.27624, 53.51919],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.27321, 53.51609],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.27192, 53.51498],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.26996, 53.51361],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.26774, 53.5124],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.2653, 53.51135],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.26265, 53.51049],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.26057, 53.50996],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.25488, 53.50878],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.25198, 53.50802],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.25205, 53.50793],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.2492, 53.50694],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.24742, 53.50612],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.24576, 53.5052],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.24378, 53.50384],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.24028, 53.50092],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.23766, 53.49931],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.23462, 53.49798],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.23126, 53.49698],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.23126, 53.49698],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.2312, 53.49707],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.22803, 53.49646],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.22509, 53.49612],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.22509, 53.49612],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.22509, 53.49612],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.22212, 53.49576],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.21995, 53.49538],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.21788, 53.49485],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.21587, 53.49422],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.21395, 53.49351],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.21151, 53.49246],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20626, 53.48986],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20626, 53.48986],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20625, 53.48986],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20625, 53.48986],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20625, 53.48986],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20391, 53.48879],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.20129, 53.4879],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.19849, 53.48725],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.19555, 53.48687],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.19104, 53.48684],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.18188, 53.48784],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.18185, 53.48772],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.18185, 53.48772],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.18124, 53.48779],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.18128, 53.48791],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.15867, 53.49036],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.15867, 53.49036],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.15369, 53.49093],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.15366, 53.49084],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.15369, 53.49093],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.15034, 53.49143],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.14748, 53.492],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.14195, 53.49342],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.13934, 53.49431],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.13687, 53.49534],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.13064, 53.49832],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.13064, 53.49832],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.12307, 53.50231],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.11319, 53.5073],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.11319, 53.5073],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.11296, 53.50715],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.11265, 53.50732],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.09793, 53.5148],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.09799, 53.51483],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.09793, 53.5148],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.09685, 53.51534],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.09693, 53.5154],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.07175, 53.52804],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.06978, 53.52904],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.06973, 53.52901],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.06969, 53.52899],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.06647, 53.53056],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.06655, 53.53063],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.05948, 53.53359],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.05426, 53.53536],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.05258, 53.53586],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.05257, 53.53585],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.05254, 53.5358],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.05088, 53.5361],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.04571, 53.53672],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.03906, 53.53792],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.03905, 53.5379],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.03906, 53.53792],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.03188, 53.53976],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.02942, 53.54022],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.02807, 53.54062],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.02363, 53.54233],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.02165, 53.54297],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.01983, 53.54376],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.01789, 53.54445],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.01648, 53.54477],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.01353, 53.54515],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00972, 53.54659],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00864, 53.54722],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00785, 53.54797],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00749, 53.54884],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00728, 53.55017],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00731, 53.55131],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00683, 53.55267],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.00703, 53.55368],
						},
					},
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: [10.007, 53.55371],
						},
					},
					{
						type: 'Feature',
						properties: {
							type: 'stop',
							id: '8002549',
							name: 'Hamburg Hbf',
							location: {
								type: 'location',
								id: '8002549',
								latitude: 53.553533,
								longitude: 10.00636,
							},
							products: {
								nationalExpress: true,
								national: true,
								regionalExpress: true,
								regional: true,
								suburban: true,
								bus: true,
								ferry: false,
								subway: true,
								tram: false,
								taxi: false,
							},
						},
						geometry: {
							type: 'Point',
							coordinates: [10.00636, 53.55354],
						},
					},
				],
			},
			tripId: '1|244757|0|80|27072020',
			line: {
				type: 'line',
				id: 'ice-696',
				fahrtNr: '696',
				name: 'ICE 696',
				public: true,
				adminCode: '80____',
				productName: 'ICE',
				mode: 'train',
				product: 'nationalExpress',
				operator: {
					type: 'operator',
					id: 'db-fernverkehr-ag',
					name: 'DB Fernverkehr AG',
				},
			},
			direction: 'Kiel Hbf',
			arrivalPlatform: '5',
			plannedArrivalPlatform: '5',
			departurePlatform: '7',
			plannedDeparturePlatform: '7',
			loadFactor: 'low-to-medium',
		},
	],
	refreshToken: '¶HKI¶T$A=1@O=Berlin Hbf (tief)@L=8098160@a=128@$A=1@O=Hamburg Hbf@L=8002549@a=128@$202007271038$202007271234$ICE  696$$1$$$',
	price: {
		amount: 69.9,
		currency: 'EUR',
		hint: null,
	},
};

export {
	dbJourneyPolyline,
};
const dbArrivals: Alternative[] = [
	{
		tripId: '1|1144239|52|80|9062020',
		stop: {
			type: 'stop',
			id: '730985',
			name: 'Jungfernheide Bahnhof (S+U), Berlin',
			location: {
				type: 'location',
				id: '730985',
				latitude: 52.530866,
				longitude: 13.300781,
			},
			products: {
				nationalExpress: false,
				national: false,
				regionalExpress: false,
				regional: true,
				suburban: true,
				bus: true,
				ferry: false,
				subway: true,
				tram: false,
				taxi: false,
			},
			station: {
				type: 'station',
				id: '8011167',
				name: 'Berlin Jungfernheide',
				location: {
					type: 'location',
					id: '8011167',
					latitude: 52.530291,
					longitude: 13.299451,
				},
				products: {
					nationalExpress: false,
					national: false,
					regionalExpress: false,
					regional: true,
					suburban: true,
					bus: true,
					ferry: false,
					subway: true,
					tram: false,
					taxi: false,
				},
				lines: [
					{
						type: 'line',
						id: '3-bb-re6',
						fahrtNr: null,
						name: 'Bus RE6',
						public: true,
						mode: 'train',
						product: 'regional',
					},
					{
						type: 'line',
						id: '3-08-sev-1491900-5842741',
						fahrtNr: null,
						name: 'Bus SEV',
						public: true,
						mode: 'train',
						product: 'regional',
					},
					{
						type: 'line',
						id: 'rb',
						fahrtNr: null,
						name: 'RB',
						public: true,
						mode: 'train',
						product: 'regional',
					},
					{
						type: 'line',
						id: 're',
						fahrtNr: null,
						name: 'RE',
						public: true,
						mode: 'train',
						product: 'regional',
					},
					{
						type: 'line',
						id: 're',
						fahrtNr: null,
						name: 'RE',
						public: true,
						mode: 'train',
						product: 'regional',
					},
					{
						type: 'line',
						id: '4-08-2',
						fahrtNr: null,
						name: 'S 2',
						public: true,
						mode: 'train',
						product: 'suburban',
					},
					{
						type: 'line',
						id: '4-08-25',
						fahrtNr: null,
						name: 'S 25',
						public: true,
						mode: 'train',
						product: 'suburban',
					},
					{
						type: 'line',
						id: '4-08-41',
						fahrtNr: null,
						name: 'S 41',
						public: true,
						mode: 'train',
						product: 'suburban',
					},
					{
						type: 'line',
						id: '4-08-42',
						fahrtNr: null,
						name: 'S 42',
						public: true,
						mode: 'train',
						product: 'suburban',
					},
					{
						type: 'line',
						id: '4-08-46',
						fahrtNr: null,
						name: 'S 46',
						public: true,
						mode: 'train',
						product: 'suburban',
					},
					{
						type: 'line',
						id: '5-vbbbvb-n7',
						fahrtNr: null,
						name: 'Bus N7',
						public: true,
						mode: 'bus',
						product: 'bus',
					},
					{
						type: 'line',
						id: '5-vbbbvb-x9',
						fahrtNr: null,
						name: 'Bus X9',
						public: true,
						mode: 'bus',
						product: 'bus',
					},
					{
						type: 'line',
						id: '5-vbbbvb-109',
						fahrtNr: null,
						name: 'Bus 109',
						public: true,
						mode: 'bus',
						product: 'bus',
					},
					{
						type: 'line',
						id: '5-vbbbvb-m21',
						fahrtNr: null,
						name: 'Bus M21',
						public: true,
						mode: 'bus',
						product: 'bus',
					},
					{
						type: 'line',
						id: '5-vbbbvb-m27',
						fahrtNr: null,
						name: 'Bus M27',
						public: true,
						mode: 'bus',
						product: 'bus',
					},
					{
						type: 'line',
						id: '7-vbbbvu-7',
						fahrtNr: null,
						name: 'U 7',
						public: true,
						mode: 'train',
						product: 'subway',
					},
				],
			},
			lines: [
				{
					type: 'line',
					id: '5-vbbbvb-n7',
					fahrtNr: null,
					name: 'Bus N7',
					public: true,
					mode: 'bus',
					product: 'bus',
				},
				{
					type: 'line',
					id: '5-vbbbvb-x9',
					fahrtNr: null,
					name: 'Bus X9',
					public: true,
					mode: 'bus',
					product: 'bus',
				},
				{
					type: 'line',
					id: '5-vbbbvb-m21',
					fahrtNr: null,
					name: 'Bus M21',
					public: true,
					mode: 'bus',
					product: 'bus',
				},
				{
					type: 'line',
					id: '5-vbbbvb-m27',
					fahrtNr: null,
					name: 'Bus M27',
					public: true,
					mode: 'bus',
					product: 'bus',
				},
				{
					type: 'line',
					id: '7-vbbbvu-7',
					fahrtNr: null,
					name: 'U 7',
					public: true,
					mode: 'train',
					product: 'subway',
				},
			],
		},
		when: '2020-06-09T17:21:00+02:00',
		plannedWhen: '2020-06-09T17:04:00+02:00',
		delay: 1020,
		platform: null,
		plannedPlatform: null,
		prognosisType: 'prognosed',
		direction: null,
		provenance: 'Rathaus Spandau (S+U), Berlin',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: '7-vbbbvu-7',
			fahrtNr: '19245',
			name: 'U 7',
			public: true,
			adminCode: 'vbbBVU',
			productName: 'U',
			mode: 'train',
			product: 'subway',
			operator: {type: 'operator', id: 'nahreisezug', name: 'Nahreisezug'},
		},
		remarks: [],
	},
];

export {
	dbArrivals,
};
const bvgRadar: Alternative[] = [
	{
		direction: 'Hohenschönhausen, Zingster Str.',
		tripId: '1|57637|1|86|19082019',
		line: {
			type: 'line',
			id: 'm4',
			fahrtNr: null,
			name: 'M4',
			public: true,
			mode: 'train',
			product: 'tram',
		},
		location: {
			type: 'location',
			latitude: 52.52211,
			longitude: 13.414728,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:26:00+02:00',
				plannedDeparture: '2019-08-19T20:26:00+02:00',
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:30:00+02:00',
				plannedArrival: '2019-08-19T20:29:00+02:00',
				arrivalDelay: 60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:30:00+02:00',
				plannedDeparture: '2019-08-19T20:29:00+02:00',
				departureDelay: 60,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:34:00+02:00',
				plannedArrival: '2019-08-19T20:31:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:34:00+02:00',
				plannedDeparture: '2019-08-19T20:31:00+02:00',
				departureDelay: 180,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900151003',
					name: 'Zingster Str. (Berlin)',
					location: {
						type: 'location',
						id: '900151003',
						latitude: 52.57236,
						longitude: 13.495164,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T21:01:00+02:00',
				plannedArrival: '2019-08-19T20:58:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41473,
							52.52211,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.4149,
							52.52222,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41507,
							52.52234,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.4151,
							52.52236,
						],
					},
				},
			],
		},
	},
	{
		direction: 'S Spandau Bhf (Berlin)',
		tripId: '1|35835|39|86|19082019',
		line: {
			type: 'line',
			id: 's9',
			fahrtNr: null,
			name: 'S9',
			public: true,
			mode: 'train',
			product: 'suburban',
		},
		location: {
			type: 'location',
			latitude: 52.521877,
			longitude: 13.410899,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900260005',
					name: 'S Flughafen Berlin-Schönefeld Bhf',
					location: {
						type: 'location',
						id: '900260005',
						latitude: 52.390796,
						longitude: 13.51352,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: true,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T19:57:00+02:00',
				plannedDeparture: '2019-08-19T19:57:00+02:00',
				departureDelay: 0,
				departurePlatform: '13',
				plannedDeparturePlatform: '13',
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100003',
					name: 'S+U Alexanderplatz Bhf (Berlin)',
					location: {
						type: 'location',
						id: '900100003',
						latitude: 52.521508,
						longitude: 13.411267,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: true,
					},
				},
				arrival: '2019-08-19T20:32:00+02:00',
				plannedArrival: '2019-08-19T20:32:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: '4',
				plannedArrivalPlatform: '4',
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:33:00+02:00',
				plannedDeparture: '2019-08-19T20:33:00+02:00',
				departureDelay: 0,
				departurePlatform: '4',
				plannedDeparturePlatform: '4',
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:34:00+02:00',
				plannedArrival: '2019-08-19T20:34:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: '4',
				plannedArrivalPlatform: '4',
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:35:00+02:00',
				plannedDeparture: '2019-08-19T20:35:00+02:00',
				departureDelay: 0,
				departurePlatform: '4',
				plannedDeparturePlatform: '4',
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900029101',
					name: 'S Spandau Bhf (Berlin)',
					location: {
						type: 'location',
						id: '900029101',
						latitude: 52.534794,
						longitude: 13.197477,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: false,
						ferry: false,
						express: true,
						regional: true,
					},
				},
				arrival: '2019-08-19T21:07:00+02:00',
				plannedArrival: '2019-08-19T21:07:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: '2',
				plannedArrivalPlatform: '2',
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100003',
					name: 'S+U Alexanderplatz Bhf (Berlin)',
					location: {
						type: 'location',
						id: '900100003',
						latitude: 52.521508,
						longitude: 13.411267,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: true,
					},
				},
				destination: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100003',
					name: 'S+U Alexanderplatz Bhf (Berlin)',
					location: {
						type: 'location',
						id: '900100003',
						latitude: 52.521508,
						longitude: 13.411267,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: true,
					},
				},
				destination: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100003',
					name: 'S+U Alexanderplatz Bhf (Berlin)',
					location: {
						type: 'location',
						id: '900100003',
						latitude: 52.521508,
						longitude: 13.411267,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: true,
					},
				},
				destination: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100003',
					name: 'S+U Alexanderplatz Bhf (Berlin)',
					location: {
						type: 'location',
						id: '900100003',
						latitude: 52.521508,
						longitude: 13.411267,
					},
					products: {
						suburban: true,
						subway: false,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: true,
					},
				},
				destination: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.4109,
							52.52188,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.40921,
							52.52268,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.40738,
							52.5233,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.40532,
							52.52338,
						],
					},
				},
			],
		},
	},
	{
		direction: 'S+U Hermannstr. (Berlin)',
		tripId: '1|31029|0|86|19082019',
		line: {
			type: 'line',
			id: 'u8',
			fahrtNr: null,
			name: 'U8',
			public: true,
			mode: 'train',
			product: 'subway',
		},
		location: {
			type: 'location',
			latitude: 52.52096,
			longitude: 13.412652,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900085104',
					name: 'U Paracelsus-Bad (Berlin)',
					location: {
						type: 'location',
						id: '900085104',
						latitude: 52.574536,
						longitude: 13.347534,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:17:00+02:00',
				plannedDeparture: '2019-08-19T20:17:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100705',
					name: 'S+U Alexanderplatz (Berlin) [U8]',
					location: {
						type: 'location',
						id: '900100705',
						latitude: 52.521616,
						longitude: 13.412121,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:33:00+02:00',
				plannedArrival: '2019-08-19T20:33:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:33:00+02:00',
				plannedDeparture: '2019-08-19T20:33:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100004',
					name: 'S+U Jannowitzbrücke (Berlin)',
					location: {
						type: 'location',
						id: '900100004',
						latitude: 52.515503,
						longitude: 13.418027,
					},
					products: {
						suburban: true,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:35:00+02:00',
				plannedArrival: '2019-08-19T20:35:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:35:00+02:00',
				plannedDeparture: '2019-08-19T20:35:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900079221',
					name: 'S+U Hermannstr. (Berlin)',
					location: {
						type: 'location',
						id: '900079221',
						latitude: 52.467177,
						longitude: 13.4317,
					},
					products: {
						suburban: true,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:47:00+02:00',
				plannedArrival: '2019-08-19T20:47:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100705',
					name: 'S+U Alexanderplatz (Berlin) [U8]',
					location: {
						type: 'location',
						id: '900100705',
						latitude: 52.521616,
						longitude: 13.412121,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100004',
					name: 'S+U Jannowitzbrücke (Berlin)',
					location: {
						type: 'location',
						id: '900100004',
						latitude: 52.515503,
						longitude: 13.418027,
					},
					products: {
						suburban: true,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100705',
					name: 'S+U Alexanderplatz (Berlin) [U8]',
					location: {
						type: 'location',
						id: '900100705',
						latitude: 52.521616,
						longitude: 13.412121,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100004',
					name: 'S+U Jannowitzbrücke (Berlin)',
					location: {
						type: 'location',
						id: '900100004',
						latitude: 52.515503,
						longitude: 13.418027,
					},
					products: {
						suburban: true,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100705',
					name: 'S+U Alexanderplatz (Berlin) [U8]',
					location: {
						type: 'location',
						id: '900100705',
						latitude: 52.521616,
						longitude: 13.412121,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100004',
					name: 'S+U Jannowitzbrücke (Berlin)',
					location: {
						type: 'location',
						id: '900100004',
						latitude: 52.515503,
						longitude: 13.418027,
					},
					products: {
						suburban: true,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100705',
					name: 'S+U Alexanderplatz (Berlin) [U8]',
					location: {
						type: 'location',
						id: '900100705',
						latitude: 52.521616,
						longitude: 13.412121,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100004',
					name: 'S+U Jannowitzbrücke (Berlin)',
					location: {
						type: 'location',
						id: '900100004',
						latitude: 52.515503,
						longitude: 13.418027,
					},
					products: {
						suburban: true,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41265,
							52.52096,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41286,
							52.5208,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41352,
							52.52026,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41423,
							52.51976,
						],
					},
				},
			],
		},
	},
	{
		direction: 'S+U Alexanderplatz',
		tripId: '1|30336|6|86|19082019',
		line: {
			type: 'line',
			id: 'u5',
			fahrtNr: null,
			name: 'U5',
			public: true,
			mode: 'train',
			product: 'subway',
		},
		location: {
			type: 'location',
			latitude: 52.522182,
			longitude: 13.415394,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900175004',
					name: 'U Kaulsdorf-Nord (Berlin)',
					location: {
						type: 'location',
						id: '900175004',
						latitude: 52.521436,
						longitude: 13.588759,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:08:00+02:00',
				plannedDeparture: '2019-08-19T20:08:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100017',
					name: 'U Schillingstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100017',
						latitude: 52.520313,
						longitude: 13.421893,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:31:00+02:00',
				plannedArrival: '2019-08-19T20:32:00+02:00',
				arrivalDelay: -60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:31:00+02:00',
				plannedDeparture: '2019-08-19T20:32:00+02:00',
				departureDelay: -60,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100704',
					name: 'S+U Alexanderplatz (Berlin) [U5]',
					location: {
						type: 'location',
						id: '900100704',
						latitude: 52.521607,
						longitude: 13.41311,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:34:00+02:00',
				plannedArrival: '2019-08-19T20:34:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100704',
					name: 'S+U Alexanderplatz (Berlin) [U5]',
					location: {
						type: 'location',
						id: '900100704',
						latitude: 52.521607,
						longitude: 13.41311,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:34:00+02:00',
				plannedArrival: '2019-08-19T20:34:00+02:00',
				arrivalDelay: 0,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100017',
					name: 'U Schillingstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100017',
						latitude: 52.520313,
						longitude: 13.421893,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100704',
					name: 'S+U Alexanderplatz (Berlin) [U5]',
					location: {
						type: 'location',
						id: '900100704',
						latitude: 52.521607,
						longitude: 13.41311,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100017',
					name: 'U Schillingstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100017',
						latitude: 52.520313,
						longitude: 13.421893,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100704',
					name: 'S+U Alexanderplatz (Berlin) [U5]',
					location: {
						type: 'location',
						id: '900100704',
						latitude: 52.521607,
						longitude: 13.41311,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100017',
					name: 'U Schillingstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100017',
						latitude: 52.520313,
						longitude: 13.421893,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100704',
					name: 'S+U Alexanderplatz (Berlin) [U5]',
					location: {
						type: 'location',
						id: '900100704',
						latitude: 52.521607,
						longitude: 13.41311,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100017',
					name: 'U Schillingstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100017',
						latitude: 52.520313,
						longitude: 13.421893,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100704',
					name: 'S+U Alexanderplatz (Berlin) [U5]',
					location: {
						type: 'location',
						id: '900100704',
						latitude: 52.521607,
						longitude: 13.41311,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41539,
							52.52218,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41487,
							52.52201,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41439,
							52.5218,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41389,
							52.52159,
						],
					},
				},
			],
		},
	},
	{
		direction: 'S+U Pankow (Berlin)',
		tripId: '1|30095|5|86|19082019',
		line: {
			type: 'line',
			id: 'u2',
			fahrtNr: null,
			name: 'U2',
			public: true,
			mode: 'train',
			product: 'subway',
		},
		location: {
			type: 'location',
			latitude: 52.520043,
			longitude: 13.413506,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900026201',
					name: 'U Theodor-Heuss-Platz (Berlin)',
					location: {
						type: 'location',
						id: '900026201',
						latitude: 52.509795,
						longitude: 13.272977,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:04:00+02:00',
				plannedDeparture: '2019-08-19T20:04:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100015',
					name: 'U Klosterstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100015',
						latitude: 52.517229,
						longitude: 13.412454,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:32:00+02:00',
				plannedArrival: '2019-08-19T20:31:00+02:00',
				arrivalDelay: 60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:32:00+02:00',
				plannedDeparture: '2019-08-19T20:31:00+02:00',
				departureDelay: 60,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100703',
					name: 'S+U Alexanderplatz (Berlin) [U2]',
					location: {
						type: 'location',
						id: '900100703',
						latitude: 52.522075,
						longitude: 13.413596,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:34:00+02:00',
				plannedArrival: '2019-08-19T20:33:00+02:00',
				arrivalDelay: 60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:34:00+02:00',
				plannedDeparture: '2019-08-19T20:33:00+02:00',
				departureDelay: 60,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900130002',
					name: 'S+U Pankow (Berlin)',
					location: {
						type: 'location',
						id: '900130002',
						latitude: 52.567281,
						longitude: 13.412283,
					},
					products: {
						suburban: true,
						subway: true,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:46:00+02:00',
				plannedArrival: '2019-08-19T20:45:00+02:00',
				arrivalDelay: 60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100015',
					name: 'U Klosterstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100015',
						latitude: 52.517229,
						longitude: 13.412454,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100703',
					name: 'S+U Alexanderplatz (Berlin) [U2]',
					location: {
						type: 'location',
						id: '900100703',
						latitude: 52.522075,
						longitude: 13.413596,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100015',
					name: 'U Klosterstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100015',
						latitude: 52.517229,
						longitude: 13.412454,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100703',
					name: 'S+U Alexanderplatz (Berlin) [U2]',
					location: {
						type: 'location',
						id: '900100703',
						latitude: 52.522075,
						longitude: 13.413596,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100015',
					name: 'U Klosterstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100015',
						latitude: 52.517229,
						longitude: 13.412454,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100703',
					name: 'S+U Alexanderplatz (Berlin) [U2]',
					location: {
						type: 'location',
						id: '900100703',
						latitude: 52.522075,
						longitude: 13.413596,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100015',
					name: 'U Klosterstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100015',
						latitude: 52.517229,
						longitude: 13.412454,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100703',
					name: 'S+U Alexanderplatz (Berlin) [U2]',
					location: {
						type: 'location',
						id: '900100703',
						latitude: 52.522075,
						longitude: 13.413596,
					},
					products: {
						suburban: false,
						subway: true,
						tram: false,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41351,
							52.52005,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41429,
							52.52035,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41473,
							52.52084,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41453,
							52.52139,
						],
					},
				},
			],
		},
	},
	{
		direction: 'Hellersdorf, Riesaer Str.',
		tripId: '1|29455|8|86|19082019',
		line: {
			type: 'line',
			id: 'm6',
			fahrtNr: null,
			name: 'M6',
			public: true,
			mode: 'train',
			product: 'tram',
		},
		location: {
			type: 'location',
			latitude: 52.522353,
			longitude: 13.415097,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:25:00+02:00',
				plannedDeparture: '2019-08-19T20:25:00+02:00',
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:33:00+02:00',
				plannedArrival: '2019-08-19T20:30:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:33:00+02:00',
				plannedDeparture: '2019-08-19T20:30:00+02:00',
				departureDelay: 180,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:36:00+02:00',
				plannedArrival: '2019-08-19T20:33:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:36:00+02:00',
				plannedDeparture: '2019-08-19T20:33:00+02:00',
				departureDelay: 180,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900175013',
					name: 'Riesaer Str. (Berlin)',
					location: {
						type: 'location',
						id: '900175013',
						latitude: 52.529401,
						longitude: 13.624186,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T21:22:00+02:00',
				plannedArrival: '2019-08-19T21:19:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.4151,
							52.52236,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41513,
							52.52238,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41541,
							52.52263,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41569,
							52.52286,
						],
					},
				},
			],
		},
	},
	{
		direction: 'S Hackescher Markt',
		tripId: '1|29362|4|86|19082019',
		line: {
			type: 'line',
			id: 'm6',
			fahrtNr: null,
			name: 'M6',
			public: true,
			mode: 'train',
			product: 'tram',
		},
		location: {
			type: 'location',
			latitude: 52.521283,
			longitude: 13.411034,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900175013',
					name: 'Riesaer Str. (Berlin)',
					location: {
						type: 'location',
						id: '900175013',
						latitude: 52.529401,
						longitude: 13.624186,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T19:39:00+02:00',
				plannedDeparture: '2019-08-19T19:39:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:33:00+02:00',
				plannedArrival: '2019-08-19T20:30:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:33:00+02:00',
				plannedDeparture: '2019-08-19T20:30:00+02:00',
				departureDelay: 180,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100515',
					name: 'Spandauer Str./Marienkirche (Berlin)',
					location: {
						type: 'location',
						id: '900100515',
						latitude: 52.520025,
						longitude: 13.404822,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:35:00+02:00',
				plannedArrival: '2019-08-19T20:32:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:35:00+02:00',
				plannedDeparture: '2019-08-19T20:32:00+02:00',
				departureDelay: 180,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100002',
					name: 'S Hackescher Markt (Berlin)',
					location: {
						type: 'location',
						id: '900100002',
						latitude: 52.522605,
						longitude: 13.402359,
					},
					products: {
						suburban: true,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:36:00+02:00',
				plannedArrival: '2019-08-19T20:33:00+02:00',
				arrivalDelay: 180,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100515',
					name: 'Spandauer Str./Marienkirche (Berlin)',
					location: {
						type: 'location',
						id: '900100515',
						latitude: 52.520025,
						longitude: 13.404822,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100515',
					name: 'Spandauer Str./Marienkirche (Berlin)',
					location: {
						type: 'location',
						id: '900100515',
						latitude: 52.520025,
						longitude: 13.404822,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100515',
					name: 'Spandauer Str./Marienkirche (Berlin)',
					location: {
						type: 'location',
						id: '900100515',
						latitude: 52.520025,
						longitude: 13.404822,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100026',
					name: 'S+U Alexanderplatz Bhf/Gontardstr. (Berlin)',
					location: {
						type: 'location',
						id: '900100026',
						latitude: 52.521059,
						longitude: 13.41125,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100515',
					name: 'Spandauer Str./Marienkirche (Berlin)',
					location: {
						type: 'location',
						id: '900100515',
						latitude: 52.520025,
						longitude: 13.404822,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41103,
							52.52129,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41057,
							52.52157,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41001,
							52.52191,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.40943,
							52.52221,
						],
					},
				},
			],
		},
	},
	{
		direction: 'S+U Hauptbahnhof',
		tripId: '1|29174|2|86|19082019',
		line: {
			type: 'line',
			id: 'm5',
			fahrtNr: null,
			name: 'M5',
			public: true,
			mode: 'train',
			product: 'tram',
		},
		location: {
			type: 'location',
			latitude: 52.52389,
			longitude: 13.416814,
		},
		nextStopovers: [
			{
				stop: {
					type: 'stop',
					id: '900151003',
					name: 'Zingster Str. (Berlin)',
					location: {
						type: 'location',
						id: '900151003',
						latitude: 52.57236,
						longitude: 13.495164,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: null,
				plannedArrival: null,
				arrivalDelay: null,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T19:59:00+02:00',
				plannedDeparture: '2019-08-19T19:59:00+02:00',
				departureDelay: 0,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:32:00+02:00',
				plannedArrival: '2019-08-19T20:30:00+02:00',
				arrivalDelay: 120,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:32:00+02:00',
				plannedDeparture: '2019-08-19T20:30:00+02:00',
				departureDelay: 120,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:34:00+02:00',
				plannedArrival: '2019-08-19T20:33:00+02:00',
				arrivalDelay: 60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: '2019-08-19T20:34:00+02:00',
				plannedDeparture: '2019-08-19T20:33:00+02:00',
				departureDelay: 60,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
			{
				stop: {
					type: 'stop',
					id: '900003259',
					name: 'Lüneburger Str. (Berlin)',
					location: {
						type: 'location',
						id: '900003259',
						latitude: 52.523315,
						longitude: 13.36207,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				arrival: '2019-08-19T20:55:00+02:00',
				plannedArrival: '2019-08-19T20:54:00+02:00',
				arrivalDelay: 60,
				arrivalPlatform: null,
				plannedArrivalPlatform: null,
				arrivalPrognosisType: null,
				departure: null,
				plannedDeparture: null,
				departureDelay: null,
				departurePlatform: null,
				plannedDeparturePlatform: null,
				departurePrognosisType: null,
			},
		],
		frames: [
			{
				origin: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 0,
			},
			{
				origin: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 10000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 20000,
			},
			{
				origin: {
					type: 'stop',
					id: '900100040',
					name: 'Mollstr./Otto-Braun-Str. (Berlin)',
					location: {
						type: 'location',
						id: '900100040',
						latitude: 52.525185,
						longitude: 13.419942,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: true,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				destination: {
					type: 'stop',
					id: '900100005',
					name: 'U Alexanderplatz (Berlin) [Tram]',
					location: {
						type: 'location',
						id: '900100005',
						latitude: 52.522389,
						longitude: 13.414495,
					},
					products: {
						suburban: false,
						subway: false,
						tram: true,
						bus: false,
						ferry: false,
						express: false,
						regional: false,
					},
				},
				t: 30000,
			},
		],
		polyline: {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41681,
							52.52389,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41628,
							52.52345,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41574,
							52.52301,
						],
					},
				},
				{
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'Point',
						coordinates: [
							13.41521,
							52.52257,
						],
					},
				},
			],
		},
	},
];

export {
	bvgRadar,
};
const journeys : Journeys = 
{"earlierRef":null,"laterRef":"3|OF|MT#14#97751#97751#97828#97828#0#0#325#97688#6#0#1050#0#0#-2147483648#1#2|PDH#56652a7d97d230d344e9fe574e96e9bb|RD#13022024|RT#163630|US#0|RS#INIT","journeys":[{"type":"journey","legs":[{"origin":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"destination":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"departure":"2024-02-13T17:19:00+01:00","plannedDeparture":"2024-02-13T17:11:00+01:00","departureDelay":480,"arrival":"2024-02-13T18:34:00+01:00","plannedArrival":"2024-02-13T18:28:00+01:00","arrivalDelay":360,"reachable":true,"tripId":"1|201802|0|80|13022024","line":{"type":"line","id":"ice-943","fahrtNr":"943","name":"ICE 943","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"direction":"Berlin Ostbahnhof","currentLocation":{"type":"location","latitude":51.497817,"longitude":7.366462},"arrivalPlatform":"9","plannedArrivalPlatform":"9","arrivalPrognosisType":"prognosed","departurePlatform":"5","plannedDeparturePlatform":"5","departurePrognosisType":"prognosed","stopovers":[{"stop":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"arrival":null,"plannedArrival":null,"arrivalDelay":null,"arrivalPlatform":null,"arrivalPrognosisType":null,"plannedArrivalPlatform":null,"departure":"2024-02-13T17:19:00+01:00","plannedDeparture":"2024-02-13T17:11:00+01:00","departureDelay":480,"departurePlatform":"5","departurePrognosisType":"prognosed","plannedDeparturePlatform":"5","remarks":[{"type":"status","code":null,"text":"Delay of previous train"}]},{"stop":{"type":"stop","id":"8000036","name":"Bielefeld Hbf","location":{"type":"location","id":"8000036","latitude":52.029421,"longitude":8.532777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T17:44:00+01:00","plannedArrival":"2024-02-13T17:36:00+01:00","arrivalDelay":480,"arrivalPlatform":"2","arrivalPrognosisType":"prognosed","plannedArrivalPlatform":"2","departure":"2024-02-13T17:46:00+01:00","plannedDeparture":"2024-02-13T17:38:00+01:00","departureDelay":480,"departurePlatform":"2","departurePrognosisType":"prognosed","plannedDeparturePlatform":"2"},{"stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T18:34:00+01:00","plannedArrival":"2024-02-13T18:28:00+01:00","arrivalDelay":360,"arrivalPlatform":"9","arrivalPrognosisType":"prognosed","plannedArrivalPlatform":"9","departure":null,"plannedDeparture":null,"departureDelay":null,"departurePlatform":null,"departurePrognosisType":null,"plannedDeparturePlatform":null}],"remarks":[{"text":"Komfort Check-in possible (visit bahn.de/kci for more information)","type":"hint","code":"komfort-checkin","summary":"Komfort-Checkin available"},{"text":"Bicycles conveyed - subject to reservation","type":"hint","code":"bicycle-conveyance-reservation","summary":"bicycles conveyed, subject to reservation"},{"text":"Number of bicycles conveyed limited","type":"hint","code":"bicycle-conveyance","summary":"bicycles conveyed"},{"text":"Bordrestaurant","type":"hint","code":"on-board-restaurant","summary":"Bordrestaurant available"},{"text":"vehicle-mounted access aid","type":"hint","code":"boarding-ramp","summary":"vehicle-mounted boarding ramp available"},{"type":"status","summary":"ICE 943: Hamm(Westf)Hbf->Hannover Hbf: Information.","code":null,"text":"No WC for mobility impaired passengers in coach 27. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888."},{"type":"status","summary":"ICE 953: Hamm(Westf)Hbf->Hannover Hbf: Information.","code":null,"text":"Train has no facilities for wheelchair users, train has no WC for disabled passengers. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888."},{"type":"status","summary":"ICE 953: Hamm(Westf)Hbf->Hannover Hbf: Information.","code":null,"text":"No WC for mobility impaired passengers in coach 27. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888."}],"loadFactor":"high"}],"refreshToken":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131711$202402131828$ICE  943$$1$$$$$$","remarks":[],"price":{"amount":39.9,"currency":"EUR","hint":null}},{"type":"journey","legs":[{"origin":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"destination":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"departure":"2024-02-13T18:09:00+01:00","plannedDeparture":"2024-02-13T18:07:00+01:00","departureDelay":120,"arrival":"2024-02-13T19:28:00+01:00","plannedArrival":"2024-02-13T19:28:00+01:00","arrivalDelay":0,"reachable":true,"tripId":"1|200529|0|80|13022024","line":{"type":"line","id":"ice-643","fahrtNr":"643","name":"ICE 643","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"direction":"Berlin Ostbahnhof","arrivalPlatform":"9","plannedArrivalPlatform":"9","arrivalPrognosisType":"prognosed","departurePlatform":"9","plannedDeparturePlatform":"9","departurePrognosisType":"prognosed","stopovers":[{"stop":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"arrival":null,"plannedArrival":null,"arrivalDelay":null,"arrivalPlatform":null,"arrivalPrognosisType":null,"plannedArrivalPlatform":null,"departure":"2024-02-13T18:09:00+01:00","plannedDeparture":"2024-02-13T18:07:00+01:00","departureDelay":120,"departurePlatform":"9","departurePrognosisType":"prognosed","plannedDeparturePlatform":"9"},{"stop":{"type":"stop","id":"8000036","name":"Bielefeld Hbf","location":{"type":"location","id":"8000036","latitude":52.029421,"longitude":8.532777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T18:36:00+01:00","plannedArrival":"2024-02-13T18:34:00+01:00","arrivalDelay":120,"arrivalPlatform":"2","arrivalPrognosisType":"prognosed","plannedArrivalPlatform":"2","departure":"2024-02-13T18:38:00+01:00","plannedDeparture":"2024-02-13T18:36:00+01:00","departureDelay":120,"departurePlatform":"2","departurePrognosisType":"prognosed","plannedDeparturePlatform":"2"},{"stop":{"type":"stop","id":"8000252","name":"Minden(Westf)","location":{"type":"location","id":"8000252","latitude":52.290566,"longitude":8.934442},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"arrival":"2024-02-13T18:58:00+01:00","plannedArrival":"2024-02-13T18:58:00+01:00","arrivalDelay":0,"arrivalPlatform":"13","arrivalPrognosisType":"prognosed","plannedArrivalPlatform":"13","departure":"2024-02-13T19:00:00+01:00","plannedDeparture":"2024-02-13T19:00:00+01:00","departureDelay":0,"departurePlatform":"13","departurePrognosisType":"prognosed","plannedDeparturePlatform":"13"},{"stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T19:28:00+01:00","plannedArrival":"2024-02-13T19:28:00+01:00","arrivalDelay":0,"arrivalPlatform":"9","arrivalPrognosisType":"prognosed","plannedArrivalPlatform":"9","departure":null,"plannedDeparture":null,"departureDelay":null,"departurePlatform":null,"departurePrognosisType":null,"plannedDeparturePlatform":null}],"remarks":[{"text":"Komfort Check-in possible (visit bahn.de/kci for more information)","type":"hint","code":"komfort-checkin","summary":"Komfort-Checkin available"},{"text":"Bordrestaurant","type":"hint","code":"on-board-restaurant","summary":"Bordrestaurant available"}],"loadFactor":"low-to-medium"}],"refreshToken":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131807$202402131928$ICE  643$$1$$$$$$","price":{"amount":39.9,"currency":"EUR","hint":null}},{"type":"journey","legs":[{"origin":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"destination":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"departure":"2024-02-13T18:45:00+01:00","plannedDeparture":"2024-02-13T18:45:00+01:00","departureDelay":null,"arrival":"2024-02-13T20:18:00+01:00","plannedArrival":"2024-02-13T20:18:00+01:00","arrivalDelay":null,"reachable":true,"tripId":"1|198001|0|80|13022024","line":{"type":"line","id":"ic-2043","fahrtNr":"2043","name":"IC 2043","public":true,"adminCode":"80____","productName":"IC","mode":"train","product":"national","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"direction":"Hannover Hbf","arrivalPlatform":"10","plannedArrivalPlatform":"10","arrivalPrognosisType":"prognosed","departurePlatform":"9","plannedDeparturePlatform":"9","departurePrognosisType":null,"stopovers":[{"stop":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"arrival":null,"plannedArrival":null,"arrivalDelay":null,"arrivalPlatform":null,"arrivalPrognosisType":null,"plannedArrivalPlatform":null,"departure":"2024-02-13T18:45:00+01:00","plannedDeparture":"2024-02-13T18:45:00+01:00","departureDelay":null,"departurePlatform":"9","departurePrognosisType":null,"plannedDeparturePlatform":"9"},{"stop":{"type":"stop","id":"8002461","name":"Gütersloh Hbf","location":{"type":"location","id":"8002461","latitude":51.906862,"longitude":8.385129},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"arrival":"2024-02-13T19:06:00+01:00","plannedArrival":"2024-02-13T19:06:00+01:00","arrivalDelay":null,"arrivalPlatform":"3","arrivalPrognosisType":null,"plannedArrivalPlatform":"3","departure":"2024-02-13T19:08:00+01:00","plannedDeparture":"2024-02-13T19:08:00+01:00","departureDelay":null,"departurePlatform":"3","departurePrognosisType":null,"plannedDeparturePlatform":"3"},{"stop":{"type":"stop","id":"8000036","name":"Bielefeld Hbf","location":{"type":"location","id":"8000036","latitude":52.029421,"longitude":8.532777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T19:18:00+01:00","plannedArrival":"2024-02-13T19:18:00+01:00","arrivalDelay":null,"arrivalPlatform":"2","arrivalPrognosisType":null,"plannedArrivalPlatform":"2","departure":"2024-02-13T19:19:00+01:00","plannedDeparture":"2024-02-13T19:19:00+01:00","departureDelay":null,"departurePlatform":"2","departurePrognosisType":null,"plannedDeparturePlatform":"2"},{"stop":{"type":"stop","id":"8000162","name":"Herford","location":{"type":"location","id":"8000162","latitude":52.119654,"longitude":8.663741},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"arrival":"2024-02-13T19:27:00+01:00","plannedArrival":"2024-02-13T19:27:00+01:00","arrivalDelay":null,"arrivalPlatform":"4","arrivalPrognosisType":null,"plannedArrivalPlatform":"4","departure":"2024-02-13T19:28:00+01:00","plannedDeparture":"2024-02-13T19:28:00+01:00","departureDelay":null,"departurePlatform":"4","departurePrognosisType":null,"plannedDeparturePlatform":"4"},{"stop":{"type":"stop","id":"8000732","name":"Bad Oeynhausen","location":{"type":"location","id":"8000732","latitude":52.205447,"longitude":8.796439},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"arrival":"2024-02-13T19:37:00+01:00","plannedArrival":"2024-02-13T19:37:00+01:00","arrivalDelay":null,"arrivalPlatform":"1","arrivalPrognosisType":null,"plannedArrivalPlatform":"1","departure":"2024-02-13T19:38:00+01:00","plannedDeparture":"2024-02-13T19:38:00+01:00","departureDelay":null,"departurePlatform":"1","departurePrognosisType":null,"plannedDeparturePlatform":"1"},{"stop":{"type":"stop","id":"8000252","name":"Minden(Westf)","location":{"type":"location","id":"8000252","latitude":52.290566,"longitude":8.934442},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"arrival":"2024-02-13T19:47:00+01:00","plannedArrival":"2024-02-13T19:47:00+01:00","arrivalDelay":null,"arrivalPlatform":"13","arrivalPrognosisType":null,"plannedArrivalPlatform":"13","departure":"2024-02-13T19:48:00+01:00","plannedDeparture":"2024-02-13T19:48:00+01:00","departureDelay":null,"departurePlatform":"13","departurePrognosisType":null,"plannedDeparturePlatform":"13"},{"stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T20:18:00+01:00","plannedArrival":"2024-02-13T20:18:00+01:00","arrivalDelay":null,"arrivalPlatform":"10","arrivalPrognosisType":"prognosed","plannedArrivalPlatform":"10","departure":null,"plannedDeparture":null,"departureDelay":null,"departurePlatform":null,"departurePrognosisType":null,"plannedDeparturePlatform":null}],"remarks":[{"text":"Komfort Check-in possible (visit bahn.de/kci for more information)","type":"hint","code":"komfort-checkin","summary":"Komfort-Checkin available"},{"text":"Bicycles conveyed - subject to reservation","type":"hint","code":"bicycle-conveyance-reservation","summary":"bicycles conveyed, subject to reservation"},{"text":"Number of bicycles conveyed limited","type":"hint","code":"bicycle-conveyance","summary":"bicycles conveyed"},{"text":"Food and beverages served at seat","type":"hint","code":"snacks","summary":"snacks available for purchase at the seat"},{"text":"vehicle-mounted access aid","type":"hint","code":"boarding-ramp","summary":"vehicle-mounted boarding ramp available"}],"loadFactor":"low-to-medium"}],"refreshToken":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131845$202402132018$IC  2043$$1$$$$$$","price":{"amount":33.9,"currency":"EUR","hint":null}},{"type":"journey","legs":[{"origin":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"destination":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"departure":"2024-02-13T19:11:00+01:00","plannedDeparture":"2024-02-13T19:11:00+01:00","departureDelay":null,"arrival":"2024-02-13T20:28:00+01:00","plannedArrival":"2024-02-13T20:28:00+01:00","arrivalDelay":null,"reachable":true,"tripId":"1|201901|0|80|13022024","line":{"type":"line","id":"ice-955","fahrtNr":"955","name":"ICE 955","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"direction":"Berlin Ostbahnhof","arrivalPlatform":"9","plannedArrivalPlatform":"9","arrivalPrognosisType":null,"departurePlatform":"5","plannedDeparturePlatform":"5","departurePrognosisType":null,"stopovers":[{"stop":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"arrival":null,"plannedArrival":null,"arrivalDelay":null,"arrivalPlatform":null,"arrivalPrognosisType":null,"plannedArrivalPlatform":null,"departure":"2024-02-13T19:11:00+01:00","plannedDeparture":"2024-02-13T19:11:00+01:00","departureDelay":null,"departurePlatform":"5","departurePrognosisType":null,"plannedDeparturePlatform":"5"},{"stop":{"type":"stop","id":"8000036","name":"Bielefeld Hbf","location":{"type":"location","id":"8000036","latitude":52.029421,"longitude":8.532777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T19:36:00+01:00","plannedArrival":"2024-02-13T19:36:00+01:00","arrivalDelay":null,"arrivalPlatform":"2","arrivalPrognosisType":null,"plannedArrivalPlatform":"2","departure":"2024-02-13T19:38:00+01:00","plannedDeparture":"2024-02-13T19:38:00+01:00","departureDelay":null,"departurePlatform":"2","departurePrognosisType":null,"plannedDeparturePlatform":"2"},{"stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T20:28:00+01:00","plannedArrival":"2024-02-13T20:28:00+01:00","arrivalDelay":null,"arrivalPlatform":"9","arrivalPrognosisType":null,"plannedArrivalPlatform":"9","departure":null,"plannedDeparture":null,"departureDelay":null,"departurePlatform":null,"departurePrognosisType":null,"plannedDeparturePlatform":null}],"remarks":[{"text":"Komfort Check-in possible (visit bahn.de/kci for more information)","type":"hint","code":"komfort-checkin","summary":"Komfort-Checkin available"},{"text":"Bordrestaurant","type":"hint","code":"on-board-restaurant","summary":"Bordrestaurant available"}],"loadFactor":"exceptionally-high"}],"refreshToken":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131911$202402132028$ICE  955$$1$$$$$$","price":null},{"type":"journey","legs":[{"origin":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"destination":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"departure":"2024-02-13T20:07:00+01:00","plannedDeparture":"2024-02-13T20:07:00+01:00","departureDelay":null,"arrival":"2024-02-13T21:28:00+01:00","plannedArrival":"2024-02-13T21:28:00+01:00","arrivalDelay":null,"reachable":true,"tripId":"1|200540|0|80|13022024","line":{"type":"line","id":"ice-645","fahrtNr":"645","name":"ICE 645","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"direction":"Berlin Ostbahnhof","arrivalPlatform":"9","plannedArrivalPlatform":"9","arrivalPrognosisType":null,"departurePlatform":"9","plannedDeparturePlatform":"9","departurePrognosisType":null,"stopovers":[{"stop":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"arrival":null,"plannedArrival":null,"arrivalDelay":null,"arrivalPlatform":null,"arrivalPrognosisType":null,"plannedArrivalPlatform":null,"departure":"2024-02-13T20:07:00+01:00","plannedDeparture":"2024-02-13T20:07:00+01:00","departureDelay":null,"departurePlatform":"9","departurePrognosisType":null,"plannedDeparturePlatform":"9"},{"stop":{"type":"stop","id":"8000036","name":"Bielefeld Hbf","location":{"type":"location","id":"8000036","latitude":52.029421,"longitude":8.532777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T20:34:00+01:00","plannedArrival":"2024-02-13T20:34:00+01:00","arrivalDelay":null,"arrivalPlatform":"2","arrivalPrognosisType":null,"plannedArrivalPlatform":"2","departure":"2024-02-13T20:36:00+01:00","plannedDeparture":"2024-02-13T20:36:00+01:00","departureDelay":null,"departurePlatform":"2","departurePrognosisType":null,"plannedDeparturePlatform":"2"},{"stop":{"type":"stop","id":"8000252","name":"Minden(Westf)","location":{"type":"location","id":"8000252","latitude":52.290566,"longitude":8.934442},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"arrival":"2024-02-13T20:58:00+01:00","plannedArrival":"2024-02-13T20:58:00+01:00","arrivalDelay":null,"arrivalPlatform":"13","arrivalPrognosisType":null,"plannedArrivalPlatform":"13","departure":"2024-02-13T21:00:00+01:00","plannedDeparture":"2024-02-13T21:00:00+01:00","departureDelay":null,"departurePlatform":"13","departurePrognosisType":null,"plannedDeparturePlatform":"13"},{"stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T21:28:00+01:00","plannedArrival":"2024-02-13T21:28:00+01:00","arrivalDelay":null,"arrivalPlatform":"9","arrivalPrognosisType":null,"plannedArrivalPlatform":"9","departure":null,"plannedDeparture":null,"departureDelay":null,"departurePlatform":null,"departurePrognosisType":null,"plannedDeparturePlatform":null}],"remarks":[{"text":"Komfort Check-in possible (visit bahn.de/kci for more information)","type":"hint","code":"komfort-checkin","summary":"Komfort-Checkin available"},{"text":"Bicycles conveyed - subject to reservation","type":"hint","code":"bicycle-conveyance-reservation","summary":"bicycles conveyed, subject to reservation"},{"text":"Number of bicycles conveyed limited","type":"hint","code":"bicycle-conveyance","summary":"bicycles conveyed"},{"text":"Bordrestaurant","type":"hint","code":"on-board-restaurant","summary":"Bordrestaurant available"},{"text":"vehicle-mounted access aid","type":"hint","code":"boarding-ramp","summary":"vehicle-mounted boarding ramp available"},{"type":"status","summary":"ICE 645: Hamm(Westf)Hbf->Hannover Hbf: Information.","code":null,"text":"Train has no wheelchair accessible entrance door. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888."},{"type":"status","summary":"ICE 645: Hamm(Westf)Hbf->Hannover Hbf: Information.","code":null,"text":"Train has no facilities for wheelchair users, train has no WC for disabled passengers. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888."}],"loadFactor":"low-to-medium"}],"refreshToken":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402132007$202402132128$ICE  645$$1$$$$$$","remarks":[],"price":{"amount":33.9,"currency":"EUR","hint":null}},{"type":"journey","legs":[{"origin":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"destination":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"departure":"2024-02-13T21:11:00+01:00","plannedDeparture":"2024-02-13T21:11:00+01:00","departureDelay":null,"arrival":"2024-02-13T22:28:00+01:00","plannedArrival":"2024-02-13T22:28:00+01:00","arrivalDelay":null,"reachable":true,"tripId":"1|201842|0|80|13022024","line":{"type":"line","id":"ice-947","fahrtNr":"947","name":"ICE 947","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"direction":"Berlin Ostbahnhof","arrivalPlatform":"9","plannedArrivalPlatform":"9","arrivalPrognosisType":null,"departurePlatform":"5","plannedDeparturePlatform":"5","departurePrognosisType":null,"stopovers":[{"stop":{"type":"stop","id":"8000149","name":"Hamm(Westf)Hbf","location":{"type":"location","id":"8000149","latitude":51.678131,"longitude":7.80777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"arrival":null,"plannedArrival":null,"arrivalDelay":null,"arrivalPlatform":null,"arrivalPrognosisType":null,"plannedArrivalPlatform":null,"departure":"2024-02-13T21:11:00+01:00","plannedDeparture":"2024-02-13T21:11:00+01:00","departureDelay":null,"departurePlatform":"5","departurePrognosisType":null,"plannedDeparturePlatform":"5"},{"stop":{"type":"stop","id":"8000036","name":"Bielefeld Hbf","location":{"type":"location","id":"8000036","latitude":52.029421,"longitude":8.532777},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T21:36:00+01:00","plannedArrival":"2024-02-13T21:36:00+01:00","arrivalDelay":null,"arrivalPlatform":"2","arrivalPrognosisType":null,"plannedArrivalPlatform":"2","departure":"2024-02-13T21:38:00+01:00","plannedDeparture":"2024-02-13T21:38:00+01:00","departureDelay":null,"departurePlatform":"2","departurePrognosisType":null,"plannedDeparturePlatform":"2"},{"stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"arrival":"2024-02-13T22:28:00+01:00","plannedArrival":"2024-02-13T22:28:00+01:00","arrivalDelay":null,"arrivalPlatform":"9","arrivalPrognosisType":null,"plannedArrivalPlatform":"9","departure":null,"plannedDeparture":null,"departureDelay":null,"departurePlatform":null,"departurePrognosisType":null,"plannedDeparturePlatform":null}],"remarks":[{"text":"Komfort Check-in possible (visit bahn.de/kci for more information)","type":"hint","code":"komfort-checkin","summary":"Komfort-Checkin available"},{"text":"Bordrestaurant","type":"hint","code":"on-board-restaurant","summary":"Bordrestaurant available"}],"loadFactor":"high"}],"refreshToken":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402132111$202402132228$ICE  947$$1$$$$$$","price":{"amount":35.9,"currency":"EUR","hint":null}}],"realtimeDataUpdatedAt":1707838756}
const rawResponse : RawResponse = 
{"ver":"1.34","ext":"DB.R21.12.a","lang":"eng","id":"376eznii4wu7g2wg","err":"OK","cInfo":{"code":"OK"},"graph":{"id":"standard","index":0},"subGraph":{"id":"global","index":0},"view":{"id":"standard","index":0,"type":"WGS84"},"svcResL":[{"meth":"TripSearch","err":"OK","res":{"common":{"locL":[{"lid":"A=1@O=Hamm(Westf)Hbf@X=7807824@Y=51678077@U=80@L=8000149@","type":"S","name":"Hamm(Westf)Hbf","icoX":0,"extId":"8000149","state":"F","crd":{"x":7807770,"y":51678131,"z":0,"floor":0},"pCls":47,"gidL":["U×008010002"]},{"lid":"A=1@O=Hannover Hbf@X=9741017@Y=52376764@U=80@L=8000152@","type":"S","name":"Hannover Hbf","icoX":0,"extId":"8000152","state":"F","crd":{"x":9741763,"y":52377079,"z":0,"floor":0},"pCls":319,"gidL":["U×008013552"]},{"lid":"A=1@O=Bielefeld Hbf@X=8532723@Y=52029259@U=80@L=8000036@","type":"S","name":"Bielefeld Hbf","icoX":0,"extId":"8000036","state":"F","crd":{"x":8532777,"y":52029421,"z":0,"floor":0},"pCls":303,"gidL":["U×008013597"]},{"lid":"A=1@O=Minden(Westf)@X=8934729@Y=52290135@U=80@L=8000252@","type":"S","name":"Minden(Westf)","icoX":0,"extId":"8000252","state":"F","crd":{"x":8934442,"y":52290566,"z":0,"floor":0},"pCls":571,"gidL":["U×008013578"]},{"lid":"A=1@O=Gütersloh Hbf@X=8385075@Y=51906943@U=80@L=8002461@","type":"S","name":"Gütersloh Hbf","icoX":0,"extId":"8002461","state":"F","crd":{"x":8385129,"y":51906862,"z":0,"floor":0},"pCls":559,"gidL":["U×008013606"]},{"lid":"A=1@O=Herford@X=8663642@Y=52119609@U=80@L=8000162@","type":"S","name":"Herford","icoX":0,"extId":"8000162","state":"F","crd":{"x":8663741,"y":52119654,"z":0,"floor":0},"pCls":559,"gidL":["U×008013593"]},{"lid":"A=1@O=Bad Oeynhausen@X=8796520@Y=52205394@U=80@L=8000732@","type":"S","name":"Bad Oeynhausen","icoX":0,"extId":"8000732","state":"F","crd":{"x":8796439,"y":52205447,"z":0,"floor":0},"pCls":555,"gidL":["U×008013585"]}],"prodL":[{"name":"ICE 943","number":"943","icoX":0,"cls":1,"oprX":0,"prodCtx":{"name":"ICE  943","num":"943","matchId":"10","catOut":"ICE","catOutS":"ICE","catOutL":"Intercity-Express","catIn":"ICE","catCode":"0","admin":"80____"}},{"name":"ICE 953","number":"953","icoX":0,"cls":1,"oprX":0,"prodCtx":{"name":"ICE  953","num":"953","matchId":"10","catOut":"ICE","catOutS":"ICE","catOutL":"Intercity-Express","catIn":"ICE","catCode":"0","admin":"80____"}},{"name":"ICE 643","number":"643","icoX":0,"cls":1,"oprX":0,"prodCtx":{"name":"ICE  643","num":"643","matchId":"10","catOut":"ICE","catOutS":"ICE","catOutL":"Intercity-Express","catIn":"ICE","catCode":"0","admin":"80____"}},{"name":"IC 2043","number":"2043","icoX":8,"cls":2,"oprX":0,"prodCtx":{"name":"IC  2043","num":"2043","matchId":"55","catOut":"IC","catOutS":"IC","catOutL":"Intercity","catIn":"IC","catCode":"1","admin":"80____"}},{"name":"ICE 955","number":"955","icoX":0,"cls":1,"oprX":0,"prodCtx":{"name":"ICE  955","num":"955","matchId":"10","catOut":"ICE","catOutS":"ICE","catOutL":"Intercity-Express","catIn":"ICE","catCode":"0","admin":"80____"}},{"name":"ICE 645","number":"645","icoX":0,"cls":1,"oprX":0,"prodCtx":{"name":"ICE  645","num":"645","matchId":"10","catOut":"ICE","catOutS":"ICE","catOutL":"Intercity-Express","catIn":"ICE","catCode":"0","admin":"80____"}},{"name":"ICE 947","number":"947","icoX":0,"cls":1,"oprX":0,"prodCtx":{"name":"ICE  947","num":"947","matchId":"10","catOut":"ICE","catOutS":"ICE","catOutL":"Intercity-Express","catIn":"ICE","catCode":"0","admin":"80____"}}],"opL":[{"name":"DB Fernverkehr AG","icoX":1}],"remL":[{"type":"D","code":"","icoX":2,"txtN":"Delay of previous train","sIdx":0},{"type":"A","code":"CK","prio":200,"icoX":3,"txtN":"Komfort Check-in possible (visit bahn.de/kci for more information)"},{"type":"A","code":"FR","prio":260,"icoX":4,"txtN":"Bicycles conveyed - subject to reservation"},{"type":"A","code":"FB","prio":260,"icoX":5,"txtN":"Number of bicycles conveyed limited"},{"type":"A","code":"BR","prio":450,"icoX":6,"txtN":"Bordrestaurant"},{"type":"A","code":"EH","prio":560,"icoX":3,"txtN":"vehicle-mounted access aid"},{"type":"M","code":"","icoX":7,"txtS":"ICE 943: Hamm(Westf)Hbf->Hannover Hbf: Information.","txtN":"No WC for mobility impaired passengers in coach 27. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888.","sIdx":0},{"type":"M","code":"","icoX":7,"txtS":"ICE 953: Hamm(Westf)Hbf->Hannover Hbf: Information.","txtN":"Train has no facilities for wheelchair users, train has no WC for disabled passengers. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888.","sIdx":0},{"type":"M","code":"","icoX":7,"txtS":"ICE 953: Hamm(Westf)Hbf->Hannover Hbf: Information.","txtN":"No WC for mobility impaired passengers in coach 27. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888.","sIdx":0},{"type":"C","code":"","icoX":7,"txtN":"Current information available."},{"type":"A","code":"MP","prio":460,"icoX":3,"txtN":"Food and beverages served at seat"},{"type":"M","code":"","icoX":7,"txtS":"ICE 645: Hamm(Westf)Hbf->Hannover Hbf: Information.","txtN":"Train has no wheelchair accessible entrance door. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888.","sIdx":0},{"type":"M","code":"","icoX":7,"txtS":"ICE 645: Hamm(Westf)Hbf->Hannover Hbf: Information.","txtN":"Train has no facilities for wheelchair users, train has no WC for disabled passengers. If a change in booking is required for travellers with reduced mobility, our Mobility Service Centre can be reached at +49 30 65212888.","sIdx":0}],"icoL":[{"res":"ICE"},{"res":"D","txt":"DB Fernverkehr AG"},{"res":"Empty"},{"res":"attr_info"},{"res":"attr_bike_r"},{"res":"attr_bike"},{"res":"attr_resto"},{"res":"HimInfo"},{"res":"IC"},{"res":"cl_all"}],"tcocL":[{"c":"FIRST","r":2},{"c":"SECOND","r":2},{"c":"FIRST","r":1},{"c":"SECOND","r":1},{"c":"FIRST","r":4},{"c":"SECOND","r":4}],"dirL":[{"txt":"Berlin Ostbahnhof","flg":"1"},{"txt":"Hannover Hbf","flg":"1"}],"lDrawStyleL":[{"sIcoX":0,"type":"SOLID"},{"type":"SOLID"},{"sIcoX":8,"type":"SOLID"}]},"outConL":[{"cid":"C-0","date":"20240213","dur":"011500","durS":"011700","durR":"011500","chg":0,"sDays":{"sDaysR":"runs daily ","sDaysB":"00000007FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0"},"dep":{"locX":0,"idx":5,"dProdX":0,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"171100","dTimeR":"171900","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[0,1]},"dTZOffset":60,"msgL":[{"type":"REM","remX":0,"sty":"I","txtC":{"r":204,"g":0,"b":0},"prio":478,"fIdx":-1,"tIdx":-1,"tagL":["RES_LOC_H3"],"sort":818413568}],"type":"N"},"arr":{"locX":1,"idx":7,"aProdX":0,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"182800","aTimeR":"183400","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"},"secL":[{"type":"JNY","dep":{"locX":0,"idx":5,"dProdX":0,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"171100","dTimeR":"171900","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[0,1],"tcM":1},"dTZOffset":60,"msgL":[{"type":"REM","remX":0,"sty":"I","txtC":{"r":204,"g":0,"b":0},"prio":478,"fIdx":-1,"tIdx":-1,"tagL":["RES_LOC_H3"],"sort":818413568}],"type":"N"},"arr":{"locX":1,"idx":7,"aProdX":0,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"182800","aTimeR":"183400","aProgType":"PROGNOSED","aTrnCmpSX":{"tcM":1},"aTZOffset":60,"type":"N"},"jny":{"jid":"1|201802|0|80|13022024","prodX":0,"dirTxt":"Berlin Ostbahnhof","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":5,"dProdX":0,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"171100","dTimeR":"171900","dProgType":"PROGNOSED","dDirTxt":"Berlin Ostbahnhof","dDirFlg":"1","dTrnCmpSX":{"tcocX":[0,1]},"dTZOffset":60,"msgL":[{"type":"REM","remX":0,"sty":"I","txtC":{"r":204,"g":0,"b":0},"prio":478,"fIdx":-1,"tIdx":-1,"tagL":["RES_LOC_H3"],"sort":818413568}],"type":"N"},{"locX":2,"idx":6,"aProdX":0,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"173600","aTimeR":"174400","aProgType":"PROGNOSED","aTZOffset":60,"dProdX":0,"dPltfS":{"type":"PL","txt":"2"},"dTimeS":"173800","dTimeR":"174600","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[0,1]},"dTZOffset":60,"type":"N"},{"locX":1,"idx":7,"aProdX":0,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"182800","aTimeR":"183400","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"}],"pos":{"x":7366462,"y":51497817},"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131711$202402131828$ICE  943$$1$$$$$$","msgL":[{"type":"REM","remX":1,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7,"tagL":["RES_JNY_DTL"],"sort":831520768},{"type":"REM","remX":2,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7,"tagL":["RES_JNY_DTL_L"],"sort":839385088},{"type":"REM","remX":3,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7,"tagL":["RES_JNY_DTL_L"],"sort":839385088},{"type":"REM","remX":4,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7,"tagL":["RES_JNY_DTL_L"],"sort":864288768},{"type":"REM","remX":5,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7,"tagL":["RES_JNY_DTL"],"sort":878706688},{"type":"REM","remX":6,"sty":"I","prio":240,"fIdx":-1,"tIdx":-1,"tagL":["RES_CON_FTR_H3"],"sort":818413568},{"type":"REM","remX":7,"sty":"I","prio":240,"fIdx":-1,"tIdx":-1,"tagL":["RES_CON_FTR_H3"],"sort":818413568},{"type":"REM","remX":8,"sty":"I","prio":240,"fIdx":-1,"tIdx":-1,"tagL":["RES_CON_FTR_H3"],"sort":818413568}],"subscr":"F","prodL":[{"prodX":0,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7}],"dirL":[{"dirX":0,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":7}],"dTrnCmpSX":{"tcocX":[0,1]},"sumLDrawStyleX":0,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"011700","tcocXL":[0,1]},"parJnyL":[{"jid":"1|201884|0|80|13022024","prodX":1,"dirTxt":"Berlin Ostbahnhof","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":3,"dProdX":1,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"171100","dTimeR":"171900","dProgType":"PROGNOSED","dDirTxt":"Berlin Ostbahnhof","dDirFlg":"1","dTrnCmpSX":{"tcocX":[0,1]},"dTZOffset":60,"type":"N"},{"locX":2,"idx":4,"aProdX":1,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"173600","aTimeR":"174400","aProgType":"PROGNOSED","aTZOffset":60,"dTrnCmpSX":{"tcocX":[0,1]},"type":"N"},{"locX":1,"idx":5,"aProdX":1,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"182800","aTimeR":"183400","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"}],"pos":{"x":7460606,"y":51362709},"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131711$202402131828$ICE  953$$1$$$$$$","subscr":"F","prodL":[{"prodX":1,"fLocX":0,"tLocX":1,"fIdx":3,"tIdx":5}],"dirL":[{"dirX":0,"fLocX":0,"tLocX":1,"fIdx":3,"tIdx":5}],"dTrnCmpSX":{"tcocX":[0,1]},"sumLDrawStyleX":0,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"011700"}],"resState":"N","resRecommendation":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131711$202402131828$ICE  943$$1$$$$$$","trfRes":{"statusCode":"OK","fareSetL":[{"fareL":[{"isFromPrice":true,"isPartPrice":false,"isBookable":true,"isUpsell":false,"targetCtx":"D","buttonText":"To offer selection","price":{"amount":3990},"retPriceIsCompletePrice":false,"retPrice":-1}]}]},"msgL":[{"type":"REM","remX":9,"sty":"I","prio":200,"fIdx":-1,"tIdx":-1,"tagL":["SUM_CON_FTR_H3"],"sort":818413568}],"conSubscr":"F","resState":"N","resRecommendation":"N","recState":"U","sotRating":0,"isSotCon":false,"showARSLink":false,"sotCtxt":{"cnLocX":0,"calcDate":"20240213","jid":"1|201802|0|80|-1","locMode":"FROM_START","pLocX":0,"reqMode":"UNKNOWN","sectX":0,"calcTime":"164030"},"cksum":"6e7d7a30_3","cksumDti":"546d300f_3","dTrnCmpSX":{"tcocX":[0,1]},"intvlSubscr":"F","tcocXL":[0,1],"originType":"INITIAL"},{"cid":"C-1","date":"20240213","dur":"011900","durS":"012100","durR":"011900","chg":0,"sDays":{"sDaysR":"runs daily ","sDaysB":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0"},"dep":{"locX":0,"idx":5,"dProdX":2,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"180700","dTimeR":"180900","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":8,"aProdX":2,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"192800","aTimeR":"192800","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"},"secL":[{"type":"JNY","dep":{"locX":0,"idx":5,"dProdX":2,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"180700","dTimeR":"180900","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[2,3],"tcM":1},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":8,"aProdX":2,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"192800","aTimeR":"192800","aProgType":"PROGNOSED","aTrnCmpSX":{"tcM":1},"aTZOffset":60,"type":"N"},"jny":{"jid":"1|200529|0|80|13022024","prodX":2,"dirTxt":"Berlin Ostbahnhof","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":5,"dProdX":2,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"180700","dTimeR":"180900","dProgType":"PROGNOSED","dDirTxt":"Berlin Ostbahnhof","dDirFlg":"1","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":2,"idx":6,"aProdX":2,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"183400","aTimeR":"183600","aProgType":"PROGNOSED","aTZOffset":60,"dProdX":2,"dPltfS":{"type":"PL","txt":"2"},"dTimeS":"183600","dTimeR":"183800","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":3,"idx":7,"aProdX":2,"aPltfS":{"type":"PL","txt":"13"},"aTimeS":"185800","aTimeR":"185800","aProgType":"PROGNOSED","aTZOffset":60,"dProdX":2,"dPltfS":{"type":"PL","txt":"13"},"dTimeS":"190000","dTimeR":"190000","dProgType":"PROGNOSED","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":1,"idx":8,"aProdX":2,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"192800","aTimeR":"192800","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131807$202402131928$ICE  643$$1$$$$$$","msgL":[{"type":"REM","remX":1,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL"],"sort":831520768},{"type":"REM","remX":4,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL_L"],"sort":864288768}],"subscr":"F","prodL":[{"prodX":2,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8}],"dirL":[{"dirX":0,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8}],"dTrnCmpSX":{"tcocX":[2,3]},"sumLDrawStyleX":0,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"012100","tcocXL":[2,3]},"resState":"N","resRecommendation":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131807$202402131928$ICE  643$$1$$$$$$","trfRes":{"statusCode":"OK","fareSetL":[{"fareL":[{"isFromPrice":true,"isPartPrice":false,"isBookable":true,"isUpsell":false,"targetCtx":"D","buttonText":"To offer selection","price":{"amount":3990},"retPriceIsCompletePrice":false,"retPrice":-1}]}]},"conSubscr":"F","resState":"N","resRecommendation":"N","recState":"U","sotRating":0,"isSotCon":false,"showARSLink":false,"sotCtxt":{"cnLocX":0,"calcDate":"20240213","jid":"1|200529|0|80|-1","locMode":"FROM_START","pLocX":0,"reqMode":"UNKNOWN","sectX":0,"calcTime":"164030"},"cksum":"62979bfa_3","cksumDti":"da13b836_3","dTrnCmpSX":{"tcocX":[2,3]},"intvlSubscr":"F","tcocXL":[2,3],"originType":"INITIAL"},{"cid":"C-2","date":"20240213","dur":"013300","durS":"013300","durR":"013300","chg":0,"sDays":{"sDaysR":"runs daily ","sDaysB":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0"},"dep":{"locX":0,"idx":5,"dProdX":3,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"184500","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":11,"aProdX":3,"aPltfS":{"type":"PL","txt":"10"},"aTimeS":"201800","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"},"secL":[{"type":"JNY","dep":{"locX":0,"idx":5,"dProdX":3,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"184500","dTrnCmpSX":{"tcocX":[2,3],"tcM":1},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":11,"aProdX":3,"aPltfS":{"type":"PL","txt":"10"},"aTimeS":"201800","aProgType":"PROGNOSED","aTrnCmpSX":{"tcM":1},"aTZOffset":60,"type":"N"},"jny":{"jid":"1|198001|0|80|13022024","prodX":3,"dirTxt":"Hannover Hbf","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":5,"dProdX":3,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"184500","dDirTxt":"Hannover Hbf","dDirFlg":"1","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":4,"idx":6,"aProdX":3,"aPltfS":{"type":"PL","txt":"3"},"aTimeS":"190600","aTZOffset":60,"dProdX":3,"dPltfS":{"type":"PL","txt":"3"},"dTimeS":"190800","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":2,"idx":7,"aProdX":3,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"191800","aTZOffset":60,"dProdX":3,"dPltfS":{"type":"PL","txt":"2"},"dTimeS":"191900","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":5,"idx":8,"aProdX":3,"aPltfS":{"type":"PL","txt":"4"},"aTimeS":"192700","aTZOffset":60,"dProdX":3,"dPltfS":{"type":"PL","txt":"4"},"dTimeS":"192800","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":6,"idx":9,"aProdX":3,"aPltfS":{"type":"PL","txt":"1"},"aTimeS":"193700","aTZOffset":60,"dProdX":3,"dPltfS":{"type":"PL","txt":"1"},"dTimeS":"193800","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":3,"idx":10,"aProdX":3,"aPltfS":{"type":"PL","txt":"13"},"aTimeS":"194700","aTZOffset":60,"dProdX":3,"dPltfS":{"type":"PL","txt":"13"},"dTimeS":"194800","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":1,"idx":11,"aProdX":3,"aPltfS":{"type":"PL","txt":"10"},"aTimeS":"201800","aProgType":"PROGNOSED","aTZOffset":60,"type":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131845$202402132018$IC  2043$$1$$$$$$","msgL":[{"type":"REM","remX":1,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11,"tagL":["RES_JNY_DTL"],"sort":831520768},{"type":"REM","remX":2,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11,"tagL":["RES_JNY_DTL_L"],"sort":839385088},{"type":"REM","remX":3,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11,"tagL":["RES_JNY_DTL_L"],"sort":839385088},{"type":"REM","remX":10,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11,"tagL":["RES_JNY_DTL"],"sort":865599488},{"type":"REM","remX":5,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11,"tagL":["RES_JNY_DTL"],"sort":878706688}],"subscr":"F","prodL":[{"prodX":3,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11}],"dirL":[{"dirX":1,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":11}],"dTrnCmpSX":{"tcocX":[2,3]},"sumLDrawStyleX":2,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"013300","tcocXL":[2,3]},"resState":"N","resRecommendation":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131845$202402132018$IC  2043$$1$$$$$$","trfRes":{"statusCode":"OK","fareSetL":[{"fareL":[{"isFromPrice":true,"isPartPrice":false,"isBookable":true,"isUpsell":false,"targetCtx":"D","buttonText":"To offer selection","price":{"amount":3390},"retPriceIsCompletePrice":false,"retPrice":-1}]}]},"conSubscr":"F","resState":"N","resRecommendation":"N","recState":"U","sotRating":0,"isSotCon":false,"showARSLink":false,"sotCtxt":{"cnLocX":0,"calcDate":"20240213","jid":"1|198001|0|80|-1","locMode":"FROM_START","pLocX":0,"reqMode":"UNKNOWN","sectX":0,"calcTime":"164030"},"cksum":"541d010f_3","cksumDti":"7f1c203a_3","dTrnCmpSX":{"tcocX":[2,3]},"intvlSubscr":"F","tcocXL":[2,3],"originType":"INITIAL"},{"cid":"C-3","date":"20240213","dur":"011700","durS":"011700","durR":"011700","chg":0,"sDays":{"sDaysR":"runs 13. Feb until 18. Oct 2024 ","sDaysB":"FC07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC000000000000000"},"dep":{"locX":0,"idx":3,"dProdX":4,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"191100","dTrnCmpSX":{"tcocX":[4,5]},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":5,"aProdX":4,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"202800","aTZOffset":60,"type":"N"},"secL":[{"type":"JNY","dep":{"locX":0,"idx":3,"dProdX":4,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"191100","dTrnCmpSX":{"tcocX":[4,5],"tcM":1},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":5,"aProdX":4,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"202800","aTrnCmpSX":{"tcM":1},"aTZOffset":60,"type":"N"},"jny":{"jid":"1|201901|0|80|13022024","prodX":4,"dirTxt":"Berlin Ostbahnhof","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":3,"dProdX":4,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"191100","dDirTxt":"Berlin Ostbahnhof","dDirFlg":"1","dTrnCmpSX":{"tcocX":[4,5]},"dTZOffset":60,"type":"N"},{"locX":2,"idx":4,"aProdX":4,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"193600","aTZOffset":60,"dProdX":4,"dPltfS":{"type":"PL","txt":"2"},"dTimeS":"193800","dTrnCmpSX":{"tcocX":[4,5]},"dTZOffset":60,"type":"N"},{"locX":1,"idx":5,"aProdX":4,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"202800","aTZOffset":60,"type":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131911$202402132028$ICE  955$$1$$$$$$","msgL":[{"type":"REM","remX":1,"sty":"I","fLocX":0,"tLocX":1,"fIdx":3,"tIdx":5,"tagL":["RES_JNY_DTL"],"sort":831520768},{"type":"REM","remX":4,"sty":"I","fLocX":0,"tLocX":1,"fIdx":3,"tIdx":5,"tagL":["RES_JNY_DTL_L"],"sort":864288768}],"subscr":"F","prodL":[{"prodX":4,"fLocX":0,"tLocX":1,"fIdx":3,"tIdx":5}],"dirL":[{"dirX":0,"fLocX":0,"tLocX":1,"fIdx":3,"tIdx":5}],"dTrnCmpSX":{"tcocX":[4,5]},"sumLDrawStyleX":0,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"011700","tcocXL":[4,5]},"resState":"N","resRecommendation":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402131911$202402132028$ICE  955$$1$$$$$$","trfRes":{"statusCode":"NA","fareSetL":[{"fareL":[{"desc":"Fares not available","isFromPrice":false,"isPartPrice":false,"isBookable":false,"isUpsell":false,"price":{"amount":-1},"retPriceIsCompletePrice":false,"retPrice":-1}]}]},"conSubscr":"F","resState":"N","resRecommendation":"N","recState":"U","sotRating":0,"isSotCon":false,"showARSLink":false,"sotCtxt":{"cnLocX":0,"calcDate":"20240213","jid":"1|201901|0|80|-1","locMode":"FROM_START","pLocX":0,"reqMode":"UNKNOWN","sectX":0,"calcTime":"164030"},"cksum":"5dcc85cc_3","cksumDti":"1b0d977c_3","dTrnCmpSX":{"tcocX":[4,5]},"intvlSubscr":"F","tcocXL":[4,5],"originType":"INITIAL"},{"cid":"C-4","date":"20240213","dur":"012100","durS":"012100","durR":"012100","chg":0,"sDays":{"sDaysR":"runs daily, not 23. Mar until 7. Apr 2024 ","sDaysB":"FFFFFFFFFFFFFFFFFFFFFFFFFF0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0"},"dep":{"locX":0,"idx":5,"dProdX":5,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"200700","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":8,"aProdX":5,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"212800","aTZOffset":60,"type":"N"},"secL":[{"type":"JNY","dep":{"locX":0,"idx":5,"dProdX":5,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"200700","dTrnCmpSX":{"tcocX":[2,3],"tcM":1},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":8,"aProdX":5,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"212800","aTrnCmpSX":{"tcM":1},"aTZOffset":60,"type":"N"},"jny":{"jid":"1|200540|0|80|13022024","prodX":5,"dirTxt":"Berlin Ostbahnhof","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":5,"dProdX":5,"dPltfS":{"type":"PL","txt":"9"},"dTimeS":"200700","dDirTxt":"Berlin Ostbahnhof","dDirFlg":"1","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":2,"idx":6,"aProdX":5,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"203400","aTZOffset":60,"dProdX":5,"dPltfS":{"type":"PL","txt":"2"},"dTimeS":"203600","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":3,"idx":7,"aProdX":5,"aPltfS":{"type":"PL","txt":"13"},"aTimeS":"205800","aTZOffset":60,"dProdX":5,"dPltfS":{"type":"PL","txt":"13"},"dTimeS":"210000","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":1,"idx":8,"aProdX":5,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"212800","aTZOffset":60,"type":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402132007$202402132128$ICE  645$$1$$$$$$","msgL":[{"type":"REM","remX":1,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL"],"sort":831520768},{"type":"REM","remX":2,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL_L"],"sort":839385088},{"type":"REM","remX":3,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL_L"],"sort":839385088},{"type":"REM","remX":4,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL_L"],"sort":864288768},{"type":"REM","remX":5,"sty":"I","fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8,"tagL":["RES_JNY_DTL"],"sort":878706688},{"type":"REM","remX":11,"sty":"I","prio":240,"fIdx":-1,"tIdx":-1,"tagL":["RES_CON_FTR_H3"],"sort":818413568},{"type":"REM","remX":12,"sty":"I","prio":240,"fIdx":-1,"tIdx":-1,"tagL":["RES_CON_FTR_H3"],"sort":818413568}],"subscr":"F","prodL":[{"prodX":5,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8}],"dirL":[{"dirX":0,"fLocX":0,"tLocX":1,"fIdx":5,"tIdx":8}],"dTrnCmpSX":{"tcocX":[2,3]},"sumLDrawStyleX":0,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"012100","tcocXL":[2,3]},"resState":"N","resRecommendation":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402132007$202402132128$ICE  645$$1$$$$$$","trfRes":{"statusCode":"OK","fareSetL":[{"fareL":[{"isFromPrice":true,"isPartPrice":false,"isBookable":true,"isUpsell":false,"targetCtx":"D","buttonText":"To offer selection","price":{"amount":3390},"retPriceIsCompletePrice":false,"retPrice":-1}]}]},"msgL":[{"type":"REM","remX":9,"sty":"I","prio":200,"fIdx":-1,"tIdx":-1,"tagL":["SUM_CON_FTR_H3"],"sort":818413568}],"conSubscr":"F","resState":"N","resRecommendation":"N","recState":"U","sotRating":0,"isSotCon":false,"showARSLink":false,"sotCtxt":{"cnLocX":0,"calcDate":"20240213","jid":"1|200540|0|80|-1","locMode":"FROM_START","pLocX":0,"reqMode":"UNKNOWN","sectX":0,"calcTime":"164030"},"cksum":"7779a23c_3","cksumDti":"a288a90b_3","dTrnCmpSX":{"tcocX":[2,3]},"intvlSubscr":"F","tcocXL":[2,3],"originType":"INITIAL"},{"cid":"C-5","date":"20240213","dur":"011700","durS":"011700","durR":"011700","chg":0,"sDays":{"sDaysR":"runs daily ","sDaysB":"FCF7FFFFFFE1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0"},"dep":{"locX":0,"idx":6,"dProdX":6,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"211100","dTrnCmpSX":{"tcocX":[2,1]},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":8,"aProdX":6,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"222800","aTZOffset":60,"type":"N"},"secL":[{"type":"JNY","dep":{"locX":0,"idx":6,"dProdX":6,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"211100","dTrnCmpSX":{"tcocX":[2,1],"tcM":1},"dTZOffset":60,"type":"N"},"arr":{"locX":1,"idx":8,"aProdX":6,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"222800","aTrnCmpSX":{"tcM":1},"aTZOffset":60,"type":"N"},"jny":{"jid":"1|201842|0|80|13022024","prodX":6,"dirTxt":"Berlin Ostbahnhof","dirFlg":"1","status":"P","isRchbl":true,"stopL":[{"locX":0,"idx":6,"dProdX":6,"dPltfS":{"type":"PL","txt":"5"},"dTimeS":"211100","dDirTxt":"Berlin Ostbahnhof","dDirFlg":"1","dTrnCmpSX":{"tcocX":[2,1]},"dTZOffset":60,"type":"N"},{"locX":2,"idx":7,"aProdX":6,"aPltfS":{"type":"PL","txt":"2"},"aTimeS":"213600","aTZOffset":60,"dProdX":6,"dPltfS":{"type":"PL","txt":"2"},"dTimeS":"213800","dTrnCmpSX":{"tcocX":[2,3]},"dTZOffset":60,"type":"N"},{"locX":1,"idx":8,"aProdX":6,"aPltfS":{"type":"PL","txt":"9"},"aTimeS":"222800","aTZOffset":60,"type":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402132111$202402132228$ICE  947$$1$$$$$$","msgL":[{"type":"REM","remX":1,"sty":"I","fLocX":0,"tLocX":1,"fIdx":6,"tIdx":8,"tagL":["RES_JNY_DTL"],"sort":831520768},{"type":"REM","remX":4,"sty":"I","fLocX":0,"tLocX":1,"fIdx":6,"tIdx":8,"tagL":["RES_JNY_DTL_L"],"sort":864288768}],"subscr":"F","prodL":[{"prodX":6,"fLocX":0,"tLocX":1,"fIdx":6,"tIdx":8}],"dirL":[{"dirX":0,"fLocX":0,"tLocX":1,"fIdx":6,"tIdx":8}],"dTrnCmpSX":{"tcocX":[2,1]},"sumLDrawStyleX":0,"resLDrawStyleX":1,"trainStartDate":"20240213","durS":"011700","tcocXL":[2,1]},"resState":"N","resRecommendation":"N"}],"ctxRecon":"T$A=1@O=Hamm(Westf)Hbf@L=8000149@a=128@$A=1@O=Hannover Hbf@L=8000152@a=128@$202402132111$202402132228$ICE  947$$1$$$$$$","trfRes":{"statusCode":"OK","fareSetL":[{"fareL":[{"isFromPrice":true,"isPartPrice":false,"isBookable":true,"isUpsell":false,"targetCtx":"D","buttonText":"To offer selection","price":{"amount":3590},"retPriceIsCompletePrice":false,"retPrice":-1}]}]},"conSubscr":"F","resState":"N","resRecommendation":"N","recState":"U","sotRating":0,"isSotCon":false,"showARSLink":false,"sotCtxt":{"cnLocX":0,"calcDate":"20240213","jid":"1|201842|0|80|-1","locMode":"FROM_START","pLocX":0,"reqMode":"UNKNOWN","sectX":0,"calcTime":"164030"},"cksum":"2906ccbf_3","cksumDti":"30de92cd_3","dTrnCmpSX":{"tcocX":[2,1]},"intvlSubscr":"F","tcocXL":[2,1],"originType":"INITIAL"}],"outCtxScrF":"3|OF|MT#14#97751#97751#97828#97828#0#0#325#97688#6#0#1050#0#0#-2147483648#1#2|PDH#56652a7d97d230d344e9fe574e96e9bb|RD#13022024|RT#163630|US#0|RS#INIT","fpB":"20231210","fpE":"20241214","bfATS":-1,"bfIOSTS":-1,"planrtTS":"1707838756","outConGrpSettings":{"conGrpL":[{"name":"All connections","icoX":9,"grpid":"cl_all","conScoringL":[{"type":"DT","conScoreL":[{"score":8807142014516199423,"scoreS":"08807142014516199423","conRefL":[0]},{"score":8806922112188547071,"scoreS":"08806922112188547071","conRefL":[1]},{"score":8806763782506807295,"scoreS":"08806763782506807295","conRefL":[2]},{"score":8806649433305907199,"scoreS":"08806649433305907199","conRefL":[3]},{"score":8806403142699188223,"scoreS":"08806403142699188223","conRefL":[4]},{"score":8806121667724574719,"scoreS":"08806121667724574719","conRefL":[5]}],"name":"Departure"},{"type":"AT","conScoreL":[{"score":8806812161027866623,"scoreS":"08806812161027866623","conRefL":[0]},{"score":8806574666514169855,"scoreS":"08806574666514169855","conRefL":[1]},{"score":8806354764181274623,"scoreS":"08806354764181274623","conRefL":[2]},{"score":8806310783724552191,"scoreS":"08806310783724552191","conRefL":[3]},{"score":8806046900931788799,"scoreS":"08806046900931788799","conRefL":[4]},{"score":8805783018143219711,"scoreS":"08805783018143219711","conRefL":[5]}],"name":"Arrival"},{"type":"TI","conScoreL":[{"score":9223038835213467647,"scoreS":"09223038835213467647","conRefL":[0]},{"score":9223021243001208831,"scoreS":"09223021243001208831","conRefL":[1]},{"score":9222959670331179007,"scoreS":"09222959670331179007","conRefL":[2]},{"score":9223030039061725183,"scoreS":"09223030039061725183","conRefL":[3]},{"score":9223012446846320639,"scoreS":"09223012446846320639","conRefL":[4]},{"score":9223030038998810623,"scoreS":"09223030038998810623","conRefL":[5]}],"name":"Duration"}],"initScoringType":"DT","requests":[{"id":"RQ_CLIENT","autosend":true}],"scrollable":true,"bitmask":1}],"selectL":[{"icoX":9,"name":"All connections","bitIdx":0}],"variant":"RADIO"}}}]}
const locations : (Station | Stop | Location)[] = 
[{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},{"type":"stop","id":"8002586","name":"Hannover-Linden/Fischerhof","location":{"type":"location","id":"8002586","latitude":52.352574,"longitude":9.723488},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},{"type":"stop","id":"8079095","name":"Hannover-Nordstadt","location":{"type":"location","id":"8079095","latitude":52.393969,"longitude":9.717267},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},{"type":"stop","id":"8002580","name":"Hannover Bismarckstr.","location":{"type":"location","id":"8002580","latitude":52.356233,"longitude":9.769809},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},{"type":"stop","id":"8079097","name":"Hannover-Ledeburg","location":{"type":"location","id":"8079097","latitude":52.408442,"longitude":9.690731},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}]
const departures : Departures = 
{"departures":[{"tripId":"1|201789|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:31:00+01:00","delay":960,"platform":"10","plannedPlatform":"9","prognosisType":"prognosed","direction":"Berlin Ostbahnhof","provenance":null,"line":{"type":"line","id":"ice-941","fahrtNr":"941","name":"ICE 941","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8010255","name":"Berlin Ostbahnhof","location":{"type":"location","id":"8010255","latitude":52.510424,"longitude":13.4349},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.395057,"longitude":9.652248},"loadFactor":"high"},{"tripId":"1|201867|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:31:00+01:00","delay":960,"platform":"10","plannedPlatform":"9","prognosisType":"prognosed","direction":"Berlin Ostbahnhof","provenance":null,"line":{"type":"line","id":"ice-951","fahrtNr":"951","name":"ICE 951","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8010255","name":"Berlin Ostbahnhof","location":{"type":"location","id":"8010255","latitude":52.510424,"longitude":13.4349},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.395057,"longitude":9.652248},"loadFactor":"high"},{"tripId":"1|1214134|30|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:42:00+01:00","plannedWhen":"2024-02-13T16:31:00+01:00","delay":660,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Nordring, Hannover","provenance":null,"line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"616113","name":"Nordring, Hannover","location":{"type":"location","id":"616113","latitude":52.403345,"longitude":9.748064},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"636228","name":"Nordring, Hannover","location":{"type":"location","id":"636228","latitude":52.403237,"longitude":9.748091},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.374948,"longitude":9.743606}},{"tripId":"1|1214134|30|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:33:00+01:00","delay":660,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Nordring, Hannover","provenance":null,"line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"616113","name":"Nordring, Hannover","location":{"type":"location","id":"616113","latitude":52.403345,"longitude":9.748064},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"636228","name":"Nordring, Hannover","location":{"type":"location","id":"636228","latitude":52.403237,"longitude":9.748091},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.374948,"longitude":9.743606}},{"tripId":"1|1213968|29|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:36:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Altenbekener Damm","provenance":null,"line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"614048","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"614048","latitude":52.355684,"longitude":9.754582},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638364","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"638364","latitude":52.354174,"longitude":9.754932},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.379811,"longitude":9.742779}},{"tripId":"1|197189|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:54:00+01:00","plannedWhen":"2024-02-13T16:37:00+01:00","delay":1020,"platform":"8","plannedPlatform":"4","prognosisType":"prognosed","direction":"Hamburg Hbf","provenance":null,"line":{"type":"line","id":"ice-1578","fahrtNr":"1578","name":"ICE 1578","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8002549","name":"Hamburg Hbf","location":{"type":"location","id":"8002549","latitude":53.553533,"longitude":10.00636},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":true,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.111564,"longitude":9.877311},"loadFactor":"high"},{"tripId":"1|1213968|29|80|13022024","stop":{"type":"stop","id":"626517","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"626517","latitude":52.375694,"longitude":9.741358},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:38:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Altenbekener Damm","provenance":null,"line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"614048","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"614048","latitude":52.355684,"longitude":9.754582},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638364","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"638364","latitude":52.354174,"longitude":9.754932},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.379811,"longitude":9.742779}},{"tripId":"1|1213193|59|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:39:00+01:00","delay":360,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Haltenhoffstraße","provenance":null,"line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"614127","name":"Haltenhoffstraße, Hannover","location":{"type":"location","id":"614127","latitude":52.392774,"longitude":9.713375},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.370678,"longitude":9.752442}},{"tripId":"1|1268870|62|80|13022024","stop":{"type":"stop","id":"638429","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638429","latitude":52.378274,"longitude":9.742743},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:40:00+01:00","plannedWhen":"2024-02-13T16:39:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Wettbergen","provenance":null,"line":{"type":"line","id":"8-webuet-3","fahrtNr":"427","name":"STR 3","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"638601","name":"Wettbergen, Hannover","location":{"type":"location","id":"638601","latitude":52.332861,"longitude":9.690659},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.375721,"longitude":9.740082}},{"tripId":"1|1274071|61|80|13022024","stop":{"type":"stop","id":"638430","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638430","latitude":52.378436,"longitude":9.74303},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:40:00+01:00","plannedWhen":"2024-02-13T16:39:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Misburg","provenance":null,"line":{"type":"line","id":"8-webuet-7","fahrtNr":"603","name":"STR 7","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"372501","name":"Misburg, Hannover","location":{"type":"location","id":"372501","latitude":52.391542,"longitude":9.853211},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"627416","name":"Misburg, Hannover","location":{"type":"location","id":"627416","latitude":52.391614,"longitude":9.853283},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.381834,"longitude":9.74517}},{"tripId":"1|199867|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:59:00+01:00","plannedWhen":"2024-02-13T16:40:00+01:00","delay":1140,"platform":"10","plannedPlatform":"12","prognosisType":"prognosed","direction":"Köln Hbf","provenance":null,"line":{"type":"line","id":"ice-556","fahrtNr":"556","name":"ICE 556","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8000206","name":"Koblenz Hbf","location":{"type":"location","id":"8000206","latitude":50.350775,"longitude":7.588343},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"currentTripPosition":{"type":"location","latitude":52.456624,"longitude":10.50136},"loadFactor":"very-high"},{"tripId":"1|237282|1|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:40:00+01:00","plannedWhen":"2024-02-13T16:40:00+01:00","delay":0,"platform":"8 D-G","plannedPlatform":"8 D-G","prognosisType":"prognosed","direction":"Uelzen","provenance":null,"line":{"type":"line","id":"me-re2","fahrtNr":"82832","name":"ME RE2","public":true,"adminCode":"R1____","productName":"ME","mode":"train","product":"regional","operator":{"type":"operator","id":"metronom","name":"metronom"},"additionalName":"ME RE2"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8000168","name":"Uelzen","location":{"type":"location","id":"8000168","latitude":52.96998,"longitude":10.553246},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}},"currentTripPosition":{"type":"location","latitude":52.380216,"longitude":9.736315}},{"tripId":"1|853524|5|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:42:00+01:00","plannedWhen":"2024-02-13T16:40:00+01:00","delay":120,"platform":"2","plannedPlatform":"2","prognosisType":"prognosed","direction":"Bennemühlen","provenance":null,"line":{"type":"line","id":"4-tdhs-4","fahrtNr":"34450","name":"S 4","public":true,"adminCode":"TDHS__","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"s-bahn-hannover-transdev","name":"S-Bahn Hannover (Transdev)"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8000871","name":"Bennemühlen","location":{"type":"location","id":"8000871","latitude":52.580343,"longitude":9.727245},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.377474,"longitude":9.742275}},{"tripId":"1|1214184|31|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:40:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Peiner Straße","provenance":null,"line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"615757","name":"Peiner Straße, Hannover","location":{"type":"location","id":"615757","latitude":52.337778,"longitude":9.769252},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638538","name":"Peiner Straße, Hannover","location":{"type":"location","id":"638538","latitude":52.337769,"longitude":9.769018},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.378795,"longitude":9.733259}},{"tripId":"1|1228790|3|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:40:00+01:00","plannedWhen":"2024-02-13T16:40:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Gehrden","provenance":null,"line":{"type":"line","id":"5-webrbg-500","fahrtNr":"0","name":"Bus 500","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"635831","name":"Schwesternhaus, Gehrden (Hannover)","location":{"type":"location","id":"635831","latitude":52.303394,"longitude":9.601288},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.379011,"longitude":9.741403}},{"tripId":"1|201507|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:42:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":60,"platform":"3","plannedPlatform":"3","prognosisType":"prognosed","direction":"München Hbf","provenance":null,"line":{"type":"line","id":"ice-883","fahrtNr":"883","name":"ICE 883","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8000261","name":"München Hbf","location":{"type":"location","id":"8000261","latitude":48.140364,"longitude":11.558744},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":true,"tram":true,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.377105,"longitude":9.74179},"loadFactor":"high"},{"tripId":"1|853658|10|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":0,"platform":"14 A-C","plannedPlatform":"14 A-C","prognosisType":"prognosed","direction":"Celle","provenance":null,"line":{"type":"line","id":"4-tdhs-6","fahrtNr":"34622","name":"S 6","public":true,"adminCode":"TDHS__","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"s-bahn-hannover-transdev","name":"S-Bahn Hannover (Transdev)"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8000064","name":"Celle","location":{"type":"location","id":"8000064","latitude":52.621019,"longitude":10.062651},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}}},{"tripId":"1|1213193|59|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":360,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Haltenhoffstraße","provenance":null,"line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"614127","name":"Haltenhoffstraße, Hannover","location":{"type":"location","id":"614127","latitude":52.392774,"longitude":9.713375},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.370678,"longitude":9.752442}},{"tripId":"1|1214156|30|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Nordring, Hannover","provenance":null,"line":{"type":"line","id":"5-webueb-128","fahrtNr":"0","name":"Bus 128","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"616113","name":"Nordring, Hannover","location":{"type":"location","id":"616113","latitude":52.403345,"longitude":9.748064},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"636228","name":"Nordring, Hannover","location":{"type":"location","id":"636228","latitude":52.403237,"longitude":9.748091},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.377222,"longitude":9.75548}},{"tripId":"1|1228165|8|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Wasserstadt Limmer, Hannover","provenance":null,"line":{"type":"line","id":"5-webrbg-170","fahrtNr":"0","name":"Bus 170","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"200525","name":"Wasserstadt Limmer, Hannover","location":{"type":"location","id":"200525","latitude":52.381187,"longitude":9.679872},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.377447,"longitude":9.738716}},{"tripId":"1|1229021|4|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Pattensen ZOB","provenance":null,"line":{"type":"line","id":"5-webrbg-300","fahrtNr":"0","name":"Bus 300","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638743","name":"ZOB, Pattensen","location":{"type":"location","id":"638743","latitude":52.263068,"longitude":9.764811},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.377447,"longitude":9.738716}},{"tripId":"1|1211616|9|80|13022024","stop":{"type":"stop","id":"638427","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638427","latitude":52.378328,"longitude":9.742563},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Messe/Nord","provenance":null,"line":{"type":"line","id":"8-webuet-8","fahrtNr":"0","name":"STR 8","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"636229","name":"Messe/Nord, Hannover","location":{"type":"location","id":"636229","latitude":52.327719,"longitude":9.804472},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":false,"ferry":false,"subway":false,"tram":true,"taxi":false}}},{"tripId":"1|1214184|31|80|13022024","stop":{"type":"stop","id":"626517","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"626517","latitude":52.375694,"longitude":9.741358},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Peiner Straße","provenance":null,"line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"615757","name":"Peiner Straße, Hannover","location":{"type":"location","id":"615757","latitude":52.337778,"longitude":9.769252},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638538","name":"Peiner Straße, Hannover","location":{"type":"location","id":"638538","latitude":52.337769,"longitude":9.769018},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.378795,"longitude":9.733259}},{"tripId":"1|1228790|3|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:42:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Gehrden","provenance":null,"line":{"type":"line","id":"5-webrbg-500","fahrtNr":"0","name":"Bus 500","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"635831","name":"Schwesternhaus, Gehrden (Hannover)","location":{"type":"location","id":"635831","latitude":52.303394,"longitude":9.601288},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.379011,"longitude":9.741403}},{"tripId":"1|1414841|0|80|13022024","stop":{"type":"stop","id":"638429","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638429","latitude":52.378274,"longitude":9.742743},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":240,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Hemmingen (Hannover)","provenance":null,"line":{"type":"line","id":"8-webuet-13","fahrtNr":"1394","name":"STR 13","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"105323","name":"Hemmingen (Hannover)","location":{"type":"location","id":"105323","latitude":52.316635,"longitude":9.729672},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.394742,"longitude":9.76215}},{"tripId":"1|1211856|23|80|13022024","stop":{"type":"stop","id":"638428","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638428","latitude":52.378382,"longitude":9.743201},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Alte Heide","provenance":null,"line":{"type":"line","id":"8-webuet-2","fahrtNr":"0","name":"STR 2","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"617053","name":"Alte Heide, Hannover","location":{"type":"location","id":"617053","latitude":52.415426,"longitude":9.781001},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638358","name":"Alte Heide, Hannover","location":{"type":"location","id":"638358","latitude":52.415768,"longitude":9.780857},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.371973,"longitude":9.740774}},{"tripId":"1|1211963|43|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Hauptbahnhof/ZOB, Hannover","provenance":null,"line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.374067,"longitude":9.726994}},{"tripId":"1|1214156|30|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Nordring, Hannover","provenance":null,"line":{"type":"line","id":"5-webueb-128","fahrtNr":"0","name":"Bus 128","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"616113","name":"Nordring, Hannover","location":{"type":"location","id":"616113","latitude":52.403345,"longitude":9.748064},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"636228","name":"Nordring, Hannover","location":{"type":"location","id":"636228","latitude":52.403237,"longitude":9.748091},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.377222,"longitude":9.75548}},{"tripId":"1|1227891|0|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Lohnde","provenance":null,"line":{"type":"line","id":"5-webrbg-700","fahrtNr":"0","name":"Bus 700","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"637006","name":"Lohnde Lohnder Straße, Seelze","location":{"type":"location","id":"637006","latitude":52.402392,"longitude":9.55903},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|1245163|62|80|13022024","stop":{"type":"stop","id":"638430","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638430","latitude":52.378436,"longitude":9.74303},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Altwarmbüchen, Isernhagen","provenance":null,"line":{"type":"line","id":"8-webuet-3","fahrtNr":"63","name":"STR 3","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"617153","name":"Altwarmbüchen, Isernhagen","location":{"type":"location","id":"617153","latitude":52.43763,"longitude":9.847422},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":true},"station":{"type":"station","id":"636293","name":"Altwarmbüchen, Isernhagen","location":{"type":"location","id":"636293","latitude":52.43763,"longitude":9.847395},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":true}}},"currentTripPosition":{"type":"location","latitude":52.369752,"longitude":9.733709}},{"tripId":"1|1211695|31|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Hauptbahnhof/ZOB, Hannover","provenance":null,"line":{"type":"line","id":"8-webuet-17","fahrtNr":"0","name":"STR 17","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.369456,"longitude":9.722697}},{"tripId":"1|1211967|43|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Ahlem","provenance":null,"line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638198","name":"Ahlem, Hannover","location":{"type":"location","id":"638198","latitude":52.377141,"longitude":9.664573},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"614111","name":"Ahlem, Hannover","location":{"type":"location","id":"614111","latitude":52.377285,"longitude":9.663817},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}}},{"tripId":"1|1228079|4|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Hauptbahnhof/ZOB, Hannover","provenance":null,"line":{"type":"line","id":"5-webrbg-700","fahrtNr":"0","name":"Bus 700","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1228969|0|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Dragonerstraße, Hannover","provenance":null,"line":{"type":"line","id":"5-webrbg-300","fahrtNr":"0","name":"Bus 300","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"970361","name":"Dragonerstraße, Hannover","location":{"type":"location","id":"970361","latitude":52.394509,"longitude":9.737115},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638399","name":"Dragonerstraße, Hannover","location":{"type":"location","id":"638399","latitude":52.394176,"longitude":9.735309},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1211967|43|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Ahlem","provenance":null,"line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638198","name":"Ahlem, Hannover","location":{"type":"location","id":"638198","latitude":52.377141,"longitude":9.664573},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"614111","name":"Ahlem, Hannover","location":{"type":"location","id":"614111","latitude":52.377285,"longitude":9.663817},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}}},{"tripId":"1|1212030|31|80|13022024","stop":{"type":"stop","id":"638427","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638427","latitude":52.378328,"longitude":9.742563},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Sarstedt","provenance":null,"line":{"type":"line","id":"8-webuet-1","fahrtNr":"0","name":"STR 1","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638767","name":"Sarstedt (Endpunkt GVH)","location":{"type":"location","id":"638767","latitude":52.23593,"longitude":9.858101},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":true},"station":{"type":"station","id":"638766","name":"Sarstedt (Endpunkt GVH)","location":{"type":"location","id":"638766","latitude":52.236092,"longitude":9.858353},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":true}}},"currentTripPosition":{"type":"location","latitude":52.39227,"longitude":9.734922}},{"tripId":"1|1227891|0|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Lohnde","provenance":null,"line":{"type":"line","id":"5-webrbg-700","fahrtNr":"0","name":"Bus 700","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"637006","name":"Lohnde Lohnder Straße, Seelze","location":{"type":"location","id":"637006","latitude":52.402392,"longitude":9.55903},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}},{"tripId":"1|1280448|62|80|13022024","stop":{"type":"stop","id":"638429","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638429","latitude":52.378274,"longitude":9.742743},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":120,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Wettbergen","provenance":null,"line":{"type":"line","id":"8-webuet-7","fahrtNr":"871","name":"STR 7","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"station","id":"638601","name":"Wettbergen, Hannover","location":{"type":"location","id":"638601","latitude":52.332861,"longitude":9.690659},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.396315,"longitude":9.766852}},{"tripId":"1|1416899|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":120,"platform":"12","plannedPlatform":"11","prognosisType":"prognosed","direction":"Norddeich Mole","provenance":null,"line":{"type":"line","id":"ic-2036","fahrtNr":"2036","name":"IC 2036","public":true,"adminCode":"80____","productName":"IC","mode":"train","product":"national","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8007768","name":"Norddeich Mole","location":{"type":"location","id":"8007768","latitude":53.62426,"longitude":7.15874},"products":{"nationalExpress":true,"national":true,"regionalExpress":false,"regional":true,"suburban":false,"bus":true,"ferry":true,"subway":false,"tram":false,"taxi":false}},"currentTripPosition":{"type":"location","latitude":52.370489,"longitude":9.878552},"loadFactor":"high"},{"tripId":"1|1211962|10|80|13022024","stop":{"type":"stop","id":"638428","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638428","latitude":52.378382,"longitude":9.743201},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Dragonerstraße, Hannover","provenance":null,"line":{"type":"line","id":"8-webuet-8","fahrtNr":"0","name":"STR 8","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"615744","name":"Dragonerstraße, Hannover","location":{"type":"location","id":"615744","latitude":52.39423,"longitude":9.735372},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638399","name":"Dragonerstraße, Hannover","location":{"type":"location","id":"638399","latitude":52.394176,"longitude":9.735309},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.358093,"longitude":9.752109}},{"tripId":"1|1213774|3|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:49:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Altenbekener Damm","provenance":null,"line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"614048","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"614048","latitude":52.355684,"longitude":9.754582},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638364","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"638364","latitude":52.354174,"longitude":9.754932},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.39183,"longitude":9.747435}},{"tripId":"1|1415605|0|80|13022024","stop":{"type":"stop","id":"638430","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638430","latitude":52.378436,"longitude":9.74303},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Fasanenkrug","provenance":null,"line":{"type":"line","id":"8-webuet-13","fahrtNr":"1238","name":"STR 13","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638403","name":"Fasanenkrug, Hannover","location":{"type":"location","id":"638403","latitude":52.431598,"longitude":9.801074},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"614136","name":"Fasanenkrug, Hannover","location":{"type":"location","id":"614136","latitude":52.43149,"longitude":9.801074},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.361383,"longitude":9.722077}},{"tripId":"1|237622|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:47:00+01:00","delay":0,"platform":"14 D-F","plannedPlatform":"14 D-F","prognosisType":"prognosed","direction":"Wolfsburg Hbf","provenance":null,"line":{"type":"line","id":"eno-re30","fahrtNr":"83525","name":"ENO RE30","public":true,"adminCode":"R0____","productName":"ENO","mode":"train","product":"regional","operator":{"type":"operator","id":"enno","name":"enno"},"additionalName":"ENO RE30"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8006552","name":"Wolfsburg Hbf","location":{"type":"location","id":"8006552","latitude":52.429495,"longitude":10.787757},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}}},{"tripId":"1|1211647|62|80|13022024","stop":{"type":"stop","id":"638429","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638429","latitude":52.378274,"longitude":9.742743},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:47:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Empelde","provenance":null,"line":{"type":"line","id":"8-webuet-9","fahrtNr":"0","name":"STR 9","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638321","name":"Empelde (Bus/Tram), Ronnenberg","location":{"type":"location","id":"638321","latitude":52.344313,"longitude":9.667242},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"614114","name":"Empelde (Stadtbahn), Ronnenberg","location":{"type":"location","id":"614114","latitude":52.344313,"longitude":9.667242},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}}},{"tripId":"1|1228599|5|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:47:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Hauptbahnhof/ZOB, Hannover","provenance":null,"line":{"type":"line","id":"5-webrbg-900","fahrtNr":"0","name":"Bus 900","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.379775,"longitude":9.760856}},{"tripId":"1|329824|8|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":null,"platform":"3","plannedPlatform":"8 A-C","prognosisType":"prognosed","direction":"Bad Harzburg","provenance":null,"line":{"type":"line","id":"erx-re10","fahrtNr":"83475","name":"erx RE10","public":true,"adminCode":"X2____","productName":"erx","mode":"train","product":"regional","operator":{"type":"operator","id":"erixx","name":"erixx"},"additionalName":"erx RE10"},"remarks":[],"origin":null,"destination":{"type":"stop","id":"8000019","name":"Bad Harzburg","location":{"type":"location","id":"8000019","latitude":51.888101,"longitude":10.55463},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":true,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":true}}},{"tripId":"1|1213774|3|80|13022024","stop":{"type":"stop","id":"626517","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"626517","latitude":52.375694,"longitude":9.741358},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:51:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Altenbekener Damm","provenance":null,"line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"614048","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"614048","latitude":52.355684,"longitude":9.754582},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638364","name":"Altenbekener Damm, Hannover","location":{"type":"location","id":"638364","latitude":52.354174,"longitude":9.754932},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.39183,"longitude":9.747435}},{"tripId":"1|1227480|3|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Burgdorf Bf","provenance":null,"line":{"type":"line","id":"5-webrbg-900","fahrtNr":"0","name":"Bus 900","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"638288","name":"Bahnhof, Burgdorf (Hannover)","location":{"type":"location","id":"638288","latitude":52.449496,"longitude":10.003709},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false},"station":{"type":"station","id":"8001279","name":"Burgdorf","location":{"type":"location","id":"8001279","latitude":52.449046,"longitude":10.00307},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":false,"taxi":false}}}},{"tripId":"1|1228969|0|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":"Dragonerstraße, Hannover","provenance":null,"line":{"type":"line","id":"5-webrbg-300","fahrtNr":"0","name":"Bus 300","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"970361","name":"Dragonerstraße, Hannover","location":{"type":"location","id":"970361","latitude":52.394509,"longitude":9.737115},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"638399","name":"Dragonerstraße, Hannover","location":{"type":"location","id":"638399","latitude":52.394176,"longitude":9.735309},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1211687|31|80|13022024","stop":{"type":"stop","id":"638428","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638428","latitude":52.378382,"longitude":9.743201},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:50:00+01:00","plannedWhen":"2024-02-13T16:49:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":"Langenhagen","provenance":null,"line":{"type":"line","id":"8-webuet-1","fahrtNr":"0","name":"STR 1","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":{"type":"stop","id":"616282","name":"Langenhagen (Hannover) (GVH)","location":{"type":"location","id":"616282","latitude":52.436884,"longitude":9.753997},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"614052","name":"Langenhagen (Hannover) (GVH)","location":{"type":"location","id":"614052","latitude":52.436569,"longitude":9.753898},"products":{"nationalExpress":false,"national":false,"regionalExpress":false,"regional":false,"suburban":false,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"currentTripPosition":{"type":"location","latitude":52.343764,"longitude":9.763616}}],"realtimeDataUpdatedAt":1707838756}
const arrivals : Arrivals = 
{"arrivals":[{"tripId":"1|198057|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T17:03:00+01:00","plannedWhen":"2024-02-13T16:20:00+01:00","delay":2580,"platform":"4","plannedPlatform":"10","prognosisType":"prognosed","direction":null,"provenance":"Tübingen Hbf","line":{"type":"line","id":"ic-2047","fahrtNr":"2047","name":"IC 2047","public":true,"adminCode":"80____","productName":"IC","mode":"train","product":"national","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.27693,"longitude":9.06608}},{"tripId":"1|1416899|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:23:00+01:00","delay":1320,"platform":"12","plannedPlatform":"11","prognosisType":"prognosed","direction":null,"provenance":"Leipzig Hbf","line":{"type":"line","id":"ic-2036","fahrtNr":"2036","name":"IC 2036","public":true,"adminCode":"80____","productName":"IC","mode":"train","product":"national","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.370489,"longitude":9.878552}},{"tripId":"1|201789|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:28:00+01:00","delay":960,"platform":"10","plannedPlatform":"9","prognosisType":"prognosed","direction":null,"provenance":"Düsseldorf Hbf","line":{"type":"line","id":"ice-941","fahrtNr":"941","name":"ICE 941","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.395057,"longitude":9.652248}},{"tripId":"1|201867|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:28:00+01:00","delay":960,"platform":"10","plannedPlatform":"9","prognosisType":"prognosed","direction":null,"provenance":"Köln Hbf","line":{"type":"line","id":"ice-951","fahrtNr":"951","name":"ICE 951","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.395057,"longitude":9.652248}},{"tripId":"1|1214134|30|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:42:00+01:00","plannedWhen":"2024-02-13T16:31:00+01:00","delay":660,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Peiner Straße, Hannover","line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.374948,"longitude":9.743606}},{"tripId":"1|1214134|30|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:33:00+01:00","delay":660,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Peiner Straße, Hannover","line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.374948,"longitude":9.743606}},{"tripId":"1|197189|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:52:00+01:00","plannedWhen":"2024-02-13T16:34:00+01:00","delay":1080,"platform":"8","plannedPlatform":"4","prognosisType":"prognosed","direction":null,"provenance":"Frankfurt(Main)Hbf","line":{"type":"line","id":"ice-1578","fahrtNr":"1578","name":"ICE 1578","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.111564,"longitude":9.877311}},{"tripId":"1|199867|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:57:00+01:00","plannedWhen":"2024-02-13T16:37:00+01:00","delay":1200,"platform":"10","plannedPlatform":"12","prognosisType":"prognosed","direction":null,"provenance":"Berlin Ostbahnhof","line":{"type":"line","id":"ice-556","fahrtNr":"556","name":"ICE 556","public":true,"adminCode":"80____","productName":"ICE","mode":"train","product":"nationalExpress","operator":{"type":"operator","id":"db-fernverkehr-ag","name":"DB Fernverkehr AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.456624,"longitude":10.50136}},{"tripId":"1|206311|0|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:38:00+01:00","delay":180,"platform":"4","plannedPlatform":"9","prognosisType":"prognosed","direction":null,"provenance":"Norddeich Mole","line":{"type":"line","id":"re-1","fahrtNr":"4423","name":"RE 1","public":true,"adminCode":"800295","productName":"RE","mode":"train","product":"regional","operator":{"type":"operator","id":"db-regio-ag-nord","name":"DB Regio AG Nord"},"additionalName":"RE 1"},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.378948,"longitude":9.739093}},{"tripId":"1|853524|5|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:40:00+01:00","plannedWhen":"2024-02-13T16:38:00+01:00","delay":120,"platform":"2","plannedPlatform":"2","prognosisType":"prognosed","direction":null,"provenance":"Hildesheim Hbf","line":{"type":"line","id":"4-tdhs-4","fahrtNr":"34450","name":"S 4","public":true,"adminCode":"TDHS__","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"s-bahn-hannover-transdev","name":"S-Bahn Hannover (Transdev)"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.377474,"longitude":9.742275}},{"tripId":"1|1211847|43|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:40:00+01:00","plannedWhen":"2024-02-13T16:38:00+01:00","delay":120,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Ahlem, Hannover","line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null},{"tripId":"1|1213968|29|80|13022024","stop":{"type":"stop","id":"626517","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"626517","latitude":52.375694,"longitude":9.741358},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:38:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Haltenhoffstraße, Hannover","line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.379811,"longitude":9.742779}},{"tripId":"1|1213193|59|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:39:00+01:00","delay":360,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Altenbekener Damm, Hannover","line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.370678,"longitude":9.752442}},{"tripId":"1|1214184|31|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:40:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Nordring, Hannover","line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.378795,"longitude":9.733259}},{"tripId":"1|1211626|61|80|13022024","stop":{"type":"stop","id":"638430","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638430","latitude":52.378436,"longitude":9.74303},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Empelde (Bus/Tram), Ronnenberg","line":{"type":"line","id":"8-webuet-9","fahrtNr":"0","name":"STR 9","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.377699,"longitude":9.742239}},{"tripId":"1|1213193|59|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":360,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Altenbekener Damm, Hannover","line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.370678,"longitude":9.752442}},{"tripId":"1|1214156|30|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Peiner Straße, Hannover","line":{"type":"line","id":"5-webueb-128","fahrtNr":"0","name":"Bus 128","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.377222,"longitude":9.75548}},{"tripId":"1|1228165|8|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Hauptbahnhof/ZOB, Hannover","line":{"type":"line","id":"5-webrbg-170","fahrtNr":"0","name":"Bus 170","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"destination":null,"currentTripPosition":{"type":"location","latitude":52.377447,"longitude":9.738716}},{"tripId":"1|1229021|4|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:41:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Dragonerstraße, Hannover","line":{"type":"line","id":"5-webrbg-300","fahrtNr":"0","name":"Bus 300","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.377447,"longitude":9.738716}},{"tripId":"1|1281851|3|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:41:00+01:00","delay":420,"platform":"13","plannedPlatform":"13","prognosisType":"prognosed","direction":null,"provenance":"Braunschweig Hbf","line":{"type":"line","id":"wfb-re70","fahrtNr":"95798","name":"WFB RE70","public":true,"adminCode":"W3____","productName":"WFB","mode":"train","product":"regional","operator":{"type":"operator","id":"westfalenbahn","name":"WestfalenBahn"},"additionalName":"WFB RE70"},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.379586,"longitude":9.960533}},{"tripId":"1|1211616|9|80|13022024","stop":{"type":"stop","id":"638427","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638427","latitude":52.378328,"longitude":9.742563},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Dragonerstraße, Hannover","line":{"type":"line","id":"8-webuet-8","fahrtNr":"0","name":"STR 8","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null},{"tripId":"1|1214184|31|80|13022024","stop":{"type":"stop","id":"626517","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"626517","latitude":52.375694,"longitude":9.741358},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Nordring, Hannover","line":{"type":"line","id":"5-webueb-134","fahrtNr":"0","name":"Bus 134","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.378795,"longitude":9.733259}},{"tripId":"1|1228790|3|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:42:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Hauptbahnhof/ZOB, Hannover","line":{"type":"line","id":"5-webrbg-500","fahrtNr":"0","name":"Bus 500","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"destination":null,"currentTripPosition":{"type":"location","latitude":52.379011,"longitude":9.741403}},{"tripId":"1|1414841|0|80|13022024","stop":{"type":"stop","id":"638429","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638429","latitude":52.378274,"longitude":9.742743},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:42:00+01:00","delay":240,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Fasanenkrug, Hannover","line":{"type":"line","id":"8-webuet-13","fahrtNr":"1394","name":"STR 13","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.394742,"longitude":9.76215}},{"tripId":"1|1211856|23|80|13022024","stop":{"type":"stop","id":"638428","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638428","latitude":52.378382,"longitude":9.743201},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Peiner Straße, Hannover","line":{"type":"line","id":"8-webuet-2","fahrtNr":"0","name":"STR 2","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.371973,"longitude":9.740774}},{"tripId":"1|1211963|43|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Ahlem, Hannover","line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.374067,"longitude":9.726994}},{"tripId":"1|1214156|30|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":300,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Peiner Straße, Hannover","line":{"type":"line","id":"5-webueb-128","fahrtNr":"0","name":"Bus 128","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.377222,"longitude":9.75548}},{"tripId":"1|1227393|4|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:43:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Schwesternhaus, Gehrden (Hannover)","line":{"type":"line","id":"5-webrbg-500","fahrtNr":"0","name":"Bus 500","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.378076,"longitude":9.739803}},{"tripId":"1|1245163|62|80|13022024","stop":{"type":"stop","id":"638430","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638430","latitude":52.378436,"longitude":9.74303},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:43:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Wettbergen, Hannover","line":{"type":"line","id":"8-webuet-3","fahrtNr":"63","name":"STR 3","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.369752,"longitude":9.733709}},{"tripId":"1|1211695|31|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Wallensteinstraße, Hannover","line":{"type":"line","id":"8-webuet-17","fahrtNr":"0","name":"STR 17","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.369456,"longitude":9.722697}},{"tripId":"1|1228079|4|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Dedensen Uhlenbrauk, Seelze","line":{"type":"line","id":"5-webrbg-700","fahrtNr":"0","name":"Bus 700","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1228969|0|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:44:00+01:00","plannedWhen":"2024-02-13T16:44:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"ZOB, Pattensen","line":{"type":"line","id":"5-webrbg-300","fahrtNr":"0","name":"Bus 300","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1211963|43|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Ahlem, Hannover","line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.374067,"longitude":9.726994}},{"tripId":"1|1211967|43|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Hauptbahnhof/ZOB, Hannover","line":{"type":"line","id":"8-webuet-10","fahrtNr":"0","name":"STR 10","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"destination":null},{"tripId":"1|1212030|31|80|13022024","stop":{"type":"stop","id":"638427","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638427","latitude":52.378328,"longitude":9.742563},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Langenhagen (Hannover) (GVH)","line":{"type":"line","id":"8-webuet-1","fahrtNr":"0","name":"STR 1","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.39227,"longitude":9.734922}},{"tripId":"1|1227891|0|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:45:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Hauptbahnhof/ZOB, Hannover","line":{"type":"line","id":"5-webrbg-700","fahrtNr":"0","name":"Bus 700","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"destination":null},{"tripId":"1|1280448|62|80|13022024","stop":{"type":"stop","id":"638429","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638429","latitude":52.378274,"longitude":9.742743},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:45:00+01:00","delay":120,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Misburg, Hannover","line":{"type":"line","id":"8-webuet-7","fahrtNr":"871","name":"STR 7","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.396315,"longitude":9.766852}},{"tripId":"1|1211695|31|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":120,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Wallensteinstraße, Hannover","line":{"type":"line","id":"8-webuet-17","fahrtNr":"0","name":"STR 17","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.369456,"longitude":9.722697}},{"tripId":"1|1211962|10|80|13022024","stop":{"type":"stop","id":"638428","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638428","latitude":52.378382,"longitude":9.743201},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Messe/Nord, Hannover","line":{"type":"line","id":"8-webuet-8","fahrtNr":"0","name":"STR 8","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.358093,"longitude":9.752109}},{"tripId":"1|1213774|3|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:49:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Haltenhoffstraße, Hannover","line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.39183,"longitude":9.747435}},{"tripId":"1|1415605|0|80|13022024","stop":{"type":"stop","id":"638430","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638430","latitude":52.378436,"longitude":9.74303},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:46:00+01:00","plannedWhen":"2024-02-13T16:46:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Hemmingen (Hannover)","line":{"type":"line","id":"8-webuet-13","fahrtNr":"1238","name":"STR 13","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.361383,"longitude":9.722077}},{"tripId":"1|853521|11|80|13022024","stop":{"type":"stop","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}},"when":"2024-02-13T16:53:00+01:00","plannedWhen":"2024-02-13T16:47:00+01:00","delay":360,"platform":"1","plannedPlatform":"1","prognosisType":"prognosed","direction":null,"provenance":"Bennemühlen","line":{"type":"line","id":"4-tdhs-4","fahrtNr":"34449","name":"S 4","public":true,"adminCode":"TDHS__","productName":"S","mode":"train","product":"suburban","operator":{"type":"operator","id":"s-bahn-hannover-transdev","name":"S-Bahn Hannover (Transdev)"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.451024,"longitude":9.735902}},{"tripId":"1|1228599|5|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:47:00+01:00","plannedWhen":"2024-02-13T16:47:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Bahnhof, Burgdorf (Hannover)","line":{"type":"line","id":"5-webrbg-900","fahrtNr":"0","name":"Bus 900","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.379775,"longitude":9.760856}},{"tripId":"1|1213774|3|80|13022024","stop":{"type":"stop","id":"626517","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"626517","latitude":52.375694,"longitude":9.741358},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:51:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":180,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Haltenhoffstraße, Hannover","line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.39183,"longitude":9.747435}},{"tripId":"1|1228079|4|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Dedensen Uhlenbrauk, Seelze","line":{"type":"line","id":"5-webrbg-700","fahrtNr":"0","name":"Bus 700","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1228969|0|80|13022024","stop":{"type":"stop","id":"628410","name":"Hauptbahnhof/ZOB, Hannover","location":{"type":"location","id":"628410","latitude":52.379811,"longitude":9.742779},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:48:00+01:00","plannedWhen":"2024-02-13T16:48:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"ZOB, Pattensen","line":{"type":"line","id":"5-webrbg-300","fahrtNr":"0","name":"Bus 300","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.373096,"longitude":9.725825}},{"tripId":"1|1211687|31|80|13022024","stop":{"type":"stop","id":"638428","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638428","latitude":52.378382,"longitude":9.743201},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:50:00+01:00","plannedWhen":"2024-02-13T16:49:00+01:00","delay":60,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Laatzen (GVH)","line":{"type":"line","id":"8-webuet-1","fahrtNr":"0","name":"STR 1","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.343764,"longitude":9.763616}},{"tripId":"1|1211890|26|80|13022024","stop":{"type":"stop","id":"638427","name":"Hauptbahnhof (U), Hannover","location":{"type":"location","id":"638427","latitude":52.378328,"longitude":9.742563},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:49:00+01:00","plannedWhen":"2024-02-13T16:49:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Alte Heide, Hannover","line":{"type":"line","id":"8-webuet-2","fahrtNr":"0","name":"STR 2","public":true,"adminCode":"webUET","productName":"STR","mode":"train","product":"tram","operator":{"type":"operator","id":"ustra-hannoversche-verkehrsbetriebe-ag","name":"üstra Hannoversche Verkehrsbetriebe AG"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.404001,"longitude":9.736585}},{"tripId":"1|1213193|60|80|13022024","stop":{"type":"stop","id":"612467","name":"Hauptbahnhof/Ernst-August-Platz, Hannover","location":{"type":"location","id":"612467","latitude":52.375739,"longitude":9.741215},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:49:00+01:00","plannedWhen":"2024-02-13T16:49:00+01:00","delay":0,"platform":null,"plannedPlatform":null,"prognosisType":"prognosed","direction":null,"provenance":"Altenbekener Damm, Hannover","line":{"type":"line","id":"5-webueb-121","fahrtNr":"0","name":"Bus 121","public":true,"adminCode":"webUEB","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.361959,"longitude":9.759714}},{"tripId":"1|1228243|3|80|13022024","stop":{"type":"stop","id":"360021","name":"Hauptbahnhof/Rosenstraße, Hannover","location":{"type":"location","id":"360021","latitude":52.376944,"longitude":9.737853},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false},"station":{"type":"station","id":"8000152","name":"Hannover Hbf","location":{"type":"location","id":"8000152","latitude":52.377079,"longitude":9.741763},"products":{"nationalExpress":true,"national":true,"regionalExpress":true,"regional":true,"suburban":true,"bus":true,"ferry":false,"subway":false,"tram":true,"taxi":false}}},"when":"2024-02-13T16:49:00+01:00","plannedWhen":"2024-02-13T16:49:00+01:00","delay":null,"platform":null,"plannedPlatform":null,"prognosisType":null,"direction":null,"provenance":"Wasserstadt Limmer, Hannover","line":{"type":"line","id":"5-webrbg-170","fahrtNr":"0","name":"Bus 170","public":true,"adminCode":"webRBG","productName":"Bus","mode":"bus","product":"bus","operator":{"type":"operator","id":"nahreisezug","name":"Nahreisezug"}},"remarks":[],"origin":null,"destination":null,"currentTripPosition":{"type":"location","latitude":52.370346,"longitude":9.705788}}],"realtimeDataUpdatedAt":1707838756}
