/* supa-config.js — ★この線の名札（本番 zeroact-kanri）★
 * どちらの線かは ★このファイルだけ★ で決める。テスト線から運ばない（テスト線の scripts/hakobu.mjs の NEVER_SHIP）。
 * url と publishable（公開鍵）は画面に埋めてよい物（RLS と関数の中の管理者の確かめで守る）。
 * invite＝招待 URL の着く先（アプリの名 → 本番の受け口）。着く先がまだ無いアプリは書かない＝画面の「招待URLを作る」が押せない。
 *   ★今は空★：麻雀の本番はまだ配信が無い・ダイコメは本番の倉庫に締め出しの trigger が当たってから足す。
 */
window.SUPA = {
  url: 'https://tnfwipbgfgjaymlszeid.supabase.co',
  key: 'sb_publishable_UHPc5Vh6jMsMA-EXmITHig_KvZC0sQe',
  env: 'prod',
  invite: {}
};
