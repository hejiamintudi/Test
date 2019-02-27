cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad () {
        this.node.touch = ["touch", 1, 2];
    },

    touchOn (pos, a, b) {
        cc.log("on", pos.x, pos.y, a, b);
        return [3, 4, 5];
    },

    touchMove (pos, a, b) {
        cc.log("move", pos.x, pos.y);
        return true;
    },

    touchLongOn (pos, a, b, c) {
        cc.log("longOn", pos.x, pos.y, a, b, c);
        return [6, 7, 8];
    },

    touchLongUp (pos, a, b, c) {
        cc.log("longUp", pos.x, pos.y, a, b, c);
        return true;
    },

    touchLongOut (pos, a, b, c) {
        cc.log("longOut", pos.x, pos.y, a, b, c);
        return true;
    },

    touchUp (pos, a, b, c) {
        cc.log("up", pos.x, pos.y, a, b, c);
        return true;
    },
});