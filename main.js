define(function (require, exports, module) {
  "use strict";

  var docIndex = 1,
    menuID = "lmata21.mtzcss.templatecss",
    menuLabel = "Nueva plantilla Materializecss",
    DocumentManager = brackets.getModule("document/DocumentManager"),
    Commands = brackets.getModule("command/Commands"),
    CommandManager = brackets.getModule("command/CommandManager"),
    EditorManager = brackets.getModule("editor/EditorManager"),
    MainViewManager = brackets.getModule("view/MainViewManager"),
    Menus = brackets.getModule("command/Menus"),
    bootstrapTemplate = require("text!template/basic.html"),
    menu;

  function newFileHandle() {
    var doc = DocumentManager.createUntitledDocument(docIndex++, ".html");

    MainViewManager._edit(MainViewManager.ACTIVE_PANE, doc);

    var activeEditor = EditorManager.getActiveEditor();
    activeEditor.document.replaceRange(bootstrapTemplate, activeEditor.getCursorPos());
  }

  CommandManager.register(menuLabel, menuID, newFileHandle);
  menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
  menu.addMenuItem(menuID, undefined, Menus.AFTER, Commands.FILE_NEW_UNTITLED);
});
