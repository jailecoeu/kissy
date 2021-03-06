/**
 * @ignore
 * scrollbar plugin for KISSY scroll-view
 * @author yiminghe@gmail.com
 */
KISSY.add(function (S, require) {
    var Base = require('base');
    var ScrollBar = require('./scrollbar/control');
    /**
     * ScrollBar plugin for ScrollView.
     * @class KISSY.ScrollView.Plugin.ScrollBar
     * @extend KISSY.Base
     */
    return Base.extend({
        pluginId: this.getName(),

        pluginSyncUI: function (scrollView) {
            var self = this;
            var minLength = self.get('minLength');
            var autoHideX = self.get('autoHideX');
            var autoHideY = self.get('autoHideY');
            var my;
            var cfg = {
                scrollView: scrollView,
                // render: scrollView.get('el') => ie7 bug
                elBefore: scrollView.$contentEl
            };
            if (minLength !== undefined) {
                cfg.minLength = minLength;
            }

            if (self.scrollBarX) {
                self.scrollBarX.sync();
            } else if (scrollView.allowScroll.left) {
                my = {
                    axis: 'x'
                };
                if (autoHideX !== undefined) {
                    cfg.autoHide = autoHideX;
                }
                self.scrollBarX = new ScrollBar(S.merge(cfg, my)).render();
            }

            if (self.scrollBarY) {
                self.scrollBarY.sync();
            } else if (scrollView.allowScroll.top) {
                my = {
                    axis: 'y'
                };
                if (autoHideY !== undefined) {
                    cfg.autoHide = autoHideY;
                }
                self.scrollBarY = new ScrollBar(S.merge(cfg, my)).render();
            }
        },

        pluginDestructor: function () {
            var self = this;
            if (self.scrollBarX) {
                self.scrollBarX.destroy();
                self.scrollBarX = null;
            }
            if (self.scrollBarY) {
                self.scrollBarY.destroy();
                self.scrollBarY = null;
            }
        }
    }, {
        ATTRS: {
            /**
             * minimum scrollbar length.
             * Defaults to 20.
             * @cfg {Number} minLength
             */
            /**
             * @ignore
             */
            minLength: {

            },
            /**
             * whether auto hide x scrollbar like ios
             * @cfg {Boolean} autoHideX
             */
            /**
             * @ignore
             */
            autoHideX: {

            },
            /**
             * whether auto hide y scrollbar like ios
             * @cfg {Boolean} autoHideY
             */
            /**
             * @ignore
             */
            autoHideY: {

            }
        }
    });
});