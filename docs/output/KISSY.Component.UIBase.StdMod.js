Ext.data.JsonP.KISSY_Component_UIBase_StdMod({"tagname":"class","name":"KISSY.Component.UIBase.StdMod","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-KISSY.Component.UIBase.StdMod","members":{"cfg":[{"name":"bodyContent","tagname":"cfg","owner":"KISSY.Component.UIBase.StdMod","meta":{},"id":"cfg-bodyContent"},{"name":"bodyStyle","tagname":"cfg","owner":"KISSY.Component.UIBase.StdMod","meta":{},"id":"cfg-bodyStyle"},{"name":"footerContent","tagname":"cfg","owner":"KISSY.Component.UIBase.StdMod","meta":{},"id":"cfg-footerContent"},{"name":"footerStyle","tagname":"cfg","owner":"KISSY.Component.UIBase.StdMod","meta":{},"id":"cfg-footerStyle"},{"name":"headerContent","tagname":"cfg","owner":"KISSY.Component.UIBase.StdMod","meta":{},"id":"cfg-headerContent"},{"name":"headerStyle","tagname":"cfg","owner":"KISSY.Component.UIBase.StdMod","meta":{},"id":"cfg-headerStyle"}],"property":[{"name":"body","tagname":"property","owner":"KISSY.Component.UIBase.StdMod","meta":{"readonly":true},"id":"property-body"},{"name":"footer","tagname":"property","owner":"KISSY.Component.UIBase.StdMod","meta":{"readonly":true},"id":"property-footer"},{"name":"header","tagname":"property","owner":"KISSY.Component.UIBase.StdMod","meta":{"readonly":true},"id":"property-header"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"stdmod.js","href":"stdmod.html#KISSY-Component-UIBase-StdMod"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["KISSY.Overlay.Dialog"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/KISSY.Overlay.Dialog' rel='KISSY.Overlay.Dialog' class='docClass'>KISSY.Overlay.Dialog</a></div><h4>Files</h4><div class='dependency'><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod' target='_blank'>stdmod.js</a></div></pre><div class='doc-contents'><p>StdMod extension class. Generate head, body, foot for component.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bodyContent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-cfg-bodyContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-cfg-bodyContent' class='name not-expandable'>bodyContent</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>html content of body element.</p>\n</div><div class='long'><p>html content of body element.</p>\n</div></div></div><div id='cfg-bodyStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-cfg-bodyStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-cfg-bodyStyle' class='name not-expandable'>bodyStyle</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Key-value map of body element's style.</p>\n</div><div class='long'><p>Key-value map of body element's style.</p>\n</div></div></div><div id='cfg-footerContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-cfg-footerContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-cfg-footerContent' class='name not-expandable'>footerContent</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>html content of footer element.</p>\n</div><div class='long'><p>html content of footer element.</p>\n</div></div></div><div id='cfg-footerStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-cfg-footerStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-cfg-footerStyle' class='name not-expandable'>footerStyle</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Key-value map of footer element's style.</p>\n</div><div class='long'><p>Key-value map of footer element's style.</p>\n</div></div></div><div id='cfg-headerContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-cfg-headerContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-cfg-headerContent' class='name not-expandable'>headerContent</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>html content of header element.</p>\n</div><div class='long'><p>html content of header element.</p>\n</div></div></div><div id='cfg-headerStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-cfg-headerStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-cfg-headerStyle' class='name not-expandable'>headerStyle</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Key-value map of header element's style.</p>\n</div><div class='long'><p>Key-value map of header element's style.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-body' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-property-body' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-property-body' class='name not-expandable'>body</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'><p>Body element of dialog.</p>\n</div><div class='long'><p>Body element of dialog.</p>\n</div></div></div><div id='property-footer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-property-footer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-property-footer' class='name not-expandable'>footer</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'><p>Footer element of dialog.</p>\n</div><div class='long'><p>Footer element of dialog.</p>\n</div></div></div><div id='property-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.UIBase.StdMod'>KISSY.Component.UIBase.StdMod</span><br/><a href='source/stdmod.html#KISSY-Component-UIBase-StdMod-property-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.UIBase.StdMod-property-header' class='name not-expandable'>header</a><span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a></span><strong class='readonly signature'>readonly</strong></div><div class='description'><div class='short'><p>Header element of dialog.</p>\n</div><div class='long'><p>Header element of dialog.</p>\n</div></div></div></div></div></div></div>"});