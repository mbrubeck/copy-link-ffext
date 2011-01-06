
function EV_CopyLink() {
  EV_CopyLink.cb.copyString(ContextHelper.popupState.linkURL);
}

XPCOMUtils.defineLazyServiceGetter(
    EV_CopyLink, "cb", "@mozilla.org/widget/clipboardhelper;1",
    "nsIClipboardHelper");
