export default function ({
  store,
  redirect
}) {
  if (!store.state.auth.user.isAdmin) {
    return redirect("/auth/login");
  }
}
