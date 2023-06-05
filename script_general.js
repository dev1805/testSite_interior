(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"history":{},"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player463","defaultLocale":"en"},"layout":"absolute","class":"Player","gap":10,"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer"],"scrollBarMargin":2,"start":"this.init()","minHeight":0,"propagateClick":false,"minWidth":0,"hash": "56164de7af3353390e0372a3c6ae90412671e916d55792928c615eba7b43de59", "definitions": [{"id":"panorama_82C8384B_886E_F611_41BD_E28318949811","label":trans('panorama_82C8384B_886E_F611_41BD_E28318949811.label'),"hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_82C8384B_886E_F611_41BD_E28318949811_t.jpg","cube":{"class":"ImageResource","levels":[{"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_82C8384B_886E_F611_41BD_E28318949811_0/{face}/0/{row}_{column}.jpg","width":3072,"rowCount":1}]}}],"data":{"label":"full-seamless-panorama-degrees-angle-view-interior-fabric-salon-prestige-modern-car-equirectangular-equidistant-spherical-140485100"},"class":"Panorama","hfovMin":"150%","vfov":180,"hfovMax":130,"thumbnailUrl":"media/panorama_82C8384B_886E_F611_41BD_E28318949811_t.jpg"},{"id":"mainPlayList","items":[{"media":"this.panorama_82C8384B_886E_F611_41BD_E28318949811","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_82C8384B_886E_F611_41BD_E28318949811_camera","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"id":"MainViewer","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColor":["#3399FF"],"class":"ViewerArea","progressBackgroundColor":["#000000"],"progressBorderColor":"#000000","subtitlesTextShadowColor":"#000000","toolTipFontSize":"1.11vmin","progressBottom":10,"subtitlesTop":0,"subtitlesBottom":50,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"progressHeight":2,"data":{"name":"Main Viewer"},"minHeight":50,"propagateClick":false,"vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"minWidth":100,"progressBarBorderRadius":2,"progressBorderSize":0,"toolTipPaddingLeft":6,"progressBarBorderSize":0,"playbackBarBottom":5,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","height":"100%","width":"100%","progressBorderRadius":2,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","progressLeft":"33%","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBorderRadius":0,"toolTipFontColor":"#606060","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadWidth":6,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","playbackBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderSize":0,"subtitlesGap":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","playbackBarHeadBorderSize":0,"playbackBarBorderRadius":0,"playbackBarLeft":0,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","firstTransitionDuration":0,"playbackBarHeadShadowOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"progressBarBorderColor":"#000000","playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000"},{"initialSequence":"this.sequence_82C57B91_886E_EA0E_41D7_8B48E20D6892","id":"panorama_82C8384B_886E_F611_41BD_E28318949811_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","class":"PanoramaPlayer"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_82C57B91_886E_EA0E_41D7_8B48E20D6892"}],"height":"100%","scrollBarColor":"#000000","width":"100%","backgroundColorRatios":[0],"scripts":{"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMainViewer":TDV.Tour.Script.getMainViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"createTween":TDV.Tour.Script.createTween,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"showWindow":TDV.Tour.Script.showWindow,"resumePlayers":TDV.Tour.Script.resumePlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"translate":TDV.Tour.Script.translate,"getComponentByName":TDV.Tour.Script.getComponentByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"init":TDV.Tour.Script.init,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setLocale":TDV.Tour.Script.setLocale,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizStart":TDV.Tour.Script.quizStart,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"clone":TDV.Tour.Script.clone,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"mixObject":TDV.Tour.Script.mixObject,"initQuiz":TDV.Tour.Script.initQuiz,"quizFinish":TDV.Tour.Script.quizFinish,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"shareSocial":TDV.Tour.Script.shareSocial,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setValue":TDV.Tour.Script.setValue,"playAudioList":TDV.Tour.Script.playAudioList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"existsKey":TDV.Tour.Script.existsKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPixels":TDV.Tour.Script.getPixels,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"startMeasurement":TDV.Tour.Script.startMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.11.js.map
})();
//Generated with v2023.0.11, Mon Jun 5 2023