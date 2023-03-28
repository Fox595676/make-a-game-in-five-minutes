// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`12001200010101010101010101010101010101010101010400000000000000000000000100000001010001010000000000000001010000000001010001010101010101010000000001000001010001000000000000000000000001000001010001000000010000000001000001000001010001000000010000010001000001000001010000000000010000010001000001010101010001010101010000010001000001020001010000000000010000010001000000000001010001010101010000010001000000000001010000000000010000010001020000000001010000000000010000000201010100000001010100010000010101010101010000000001010100010000010000000000000000000301010000010000000000000001010101010301010002010000000000000000000303030301010101010101010101010101010101010101`, img`
222222222222222222
2............2...2
2.22.......22....2
2.22222222....2..2
2.2...........2..2
2.2...2....2..2..2
2.2...2..2.2..2..2
2.....2..2.2..2222
2.22222..2.2..2..2
2.....2..2.2.....2
2.22222..2.2.....2
2.....2..2.2.....2
2.....2....222...2
22.2..2222222....2
22.2..2..........2
2..2.......22222.2
2..2.............2
222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
