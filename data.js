var dataLength = 12;

var radius = [
84.6740400843,
85.6557791045,
85.5345565364,
84.1356242748,
152.01792713,
144.481064191,
138.679420942,
146.317749109,
134.153056702,
161.755520925,
163.6839104,
160.9430757,
];
var position = [
[new Date("2013-04-10"),94.6740400843],
[new Date("2013-04-10"),265.003859273],
[new Date("2013-04-10"),436.194194914],
[new Date("2013-04-10"),605.864375725],
[new Date("2013-04-15"),350.0],
[new Date("2013-04-25"),183.48311083],
[new Date("2013-04-25"),523.48311083],
[new Date("2013-04-29"),187.37330826],
[new Date("2013-04-29"),527.37330826],
[new Date("2013-04-03"),350.0],
[new Date("2013-04-07"),181.435314743],
[new Date("2013-04-07"),521.435314743],
];
var wordSet = [
[["",10,],["nayarivera",9,],["schedule",8,],["brittana",7,],["busy",6,],],
[["dark",10,],["ii",9,],["soul",8,],["star",7,],],
[["obama",10,],["target",9,],["release",8,],["republican",7,],["tax",6,],],
[["apparently",10,],["mg",9,],["twin",8,],["robin",7,],],
[["bomb",10,],["muslim",9,],["suspicious",8,],["spread",7,],["threaten",6,],],
[["smile",10,],["hotel",9,],["behind",8,],["everyday",7,],["jb",6,],],
[["forever",10,],["scene",9,],["alone",8,],["realize",7,],["couple",6,],],
[["much",10,],["i",9,],["spend",8,],["confessionnight",7,],],
[["leave",10,],["still",9,],["good",8,],["feel",7,],["too",6,],],
[["korea",10,],["north",9,],["cnbc",8,],["bomb",7,],["attack",6,],],
[["dog",10,],["breed",9,],["cat",8,],["sunday",7,],["pet",6,],],
[["homework",10,],["payne",9,],["clean",8,],["real",7,],["outside",6,],],
];



var node_a = {"id":"TF", "content":"Tensor Flow", "date":"2013-04-10", "connections":[] };
var node_b = {"id":"google", "content":"Google", "date":"2013-04-15", "connections":["TF"] };
var new_nodes = [node_a, node_b];