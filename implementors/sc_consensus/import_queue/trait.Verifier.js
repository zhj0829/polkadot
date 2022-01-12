(function() {var implementors = {};
implementors["sc_consensus_babe"] = [{"text":"impl&lt;Block, Client, SelectChain, CAW, CIDP&gt; <a class=\"trait\" href=\"sc_consensus/import_queue/trait.Verifier.html\" title=\"trait sc_consensus::import_queue::Verifier\">Verifier</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_consensus_babe/struct.BabeVerifier.html\" title=\"struct sc_consensus_babe::BabeVerifier\">BabeVerifier</a>&lt;Block, Client, SelectChain, CAW, CIDP&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client: <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;Block, Error = <a class=\"enum\" href=\"sp_blockchain/error/enum.Error.html\" title=\"enum sp_blockchain::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"sp_blockchain/backend/trait.HeaderBackend.html\" title=\"trait sp_blockchain::backend::HeaderBackend\">HeaderBackend</a>&lt;Block&gt; + <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"sc_client_api/backend/trait.AuxStore.html\" title=\"trait sc_client_api::backend::AuxStore\">AuxStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Client::<a class=\"type\" href=\"sp_api/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sp_api::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"sp_block_builder/trait.BlockBuilder.html\" title=\"trait sp_block_builder::BlockBuilder\">BlockBuilderApi</a>&lt;Block&gt; + <a class=\"trait\" href=\"sc_consensus_babe/trait.BabeApi.html\" title=\"trait sc_consensus_babe::BabeApi\">BabeApi</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SelectChain: <a class=\"trait\" href=\"sp_consensus/select_chain/trait.SelectChain.html\" title=\"trait sp_consensus::select_chain::SelectChain\">SelectChain</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;CAW: <a class=\"trait\" href=\"sp_consensus/trait.CanAuthorWith.html\" title=\"trait sp_consensus::CanAuthorWith\">CanAuthorWith</a>&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP: <a class=\"trait\" href=\"sp_inherents/client_side/trait.CreateInherentDataProviders.html\" title=\"trait sp_inherents::client_side::CreateInherentDataProviders\">CreateInherentDataProviders</a>&lt;Block, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;CIDP::<a class=\"type\" href=\"sp_inherents/client_side/trait.CreateInherentDataProviders.html#associatedtype.InherentDataProviders\" title=\"type sp_inherents::client_side::CreateInherentDataProviders::InherentDataProviders\">InherentDataProviders</a>: <a class=\"trait\" href=\"sc_consensus_slots/trait.InherentDataProviderExt.html\" title=\"trait sc_consensus_slots::InherentDataProviderExt\">InherentDataProviderExt</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":false,"types":["sc_consensus_babe::BabeVerifier"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()