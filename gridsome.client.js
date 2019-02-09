/**
 * @param Vue                 Vue instance
 * @param options             Plugin options
 * @param context.appOptions  Options for the Vue instance
 * @param context.router      The router instance
 * @param context.head        VueMeta info objet
 * @param context.isClient
 * @param context.isServer
 */
export default function (Vue, options, context) {
  console.log(context.head);
}
