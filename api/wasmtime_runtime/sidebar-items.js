initSidebarItems({"constant":[["VERSION","Version number of this crate."]],"enum":[["Export","The value of an export passed from one instance to another."],["InstantiationError","An error while instantiating a module."],["Trap","Stores trace message with backtrace."]],"fn":[["catch_traps","Catches any wasm traps that happen within the execution of `closure`, returning them as a `Result`."],["raise_lib_trap","Raises a trap from inside library code immediately."],["raise_user_trap","Raises a user-defined trap immediately."],["resume_panic","Carries a Rust panic across wasm code and resumes the panic on the other side."]],"mod":[["libcalls","Runtime library calls."]],"struct":[["ExportFunction","A function export value."],["ExportGlobal","A global export value."],["ExportMemory","A memory export value."],["ExportTable","A table export value."],["GdbJitImageRegistration","Registeration for JIT image"],["Imports","Resolved import pointers."],["InstanceHandle","A handle holding an `Instance` of a WebAssembly module."],["LinkError","An link error while instantiating a module."],["Mmap","A simple struct consisting of a page-aligned pointer to page-aligned and initially-zeroed memory and a length."],["SignatureRegistry","WebAssembly requires that the caller and callee signatures in an indirect call must match. To implement this efficiently, keep a registry of all signatures, shared by all instances, so that call sites can just do an index comparison."],["Table","A table instance."],["TrapDescription","Description of a trap."],["TrapRegistration","RAII structure returned from `TrapRegistry::register_trap` to unregister trap information on drop."],["TrapRegistry","The registry maintains descriptions of traps in currently allocated functions."],["VMCallerCheckedAnyfunc","The VM caller-checked \"anyfunc\" record, for caller-side signature checking. It consists of the actual function pointer and a signature id to be checked by the caller."],["VMContext","The VM \"context\", which is pointed to by the `vmctx` arg in Cranelift. This has information about globals, memories, tables, and other runtime state associated with the current instance."],["VMFunctionBody","A placeholder byte-sized type which is just used to provide some amount of type safety when dealing with pointers to JIT-compiled function bodies. Note that it's deliberately not Copy, as we shouldn't be carelessly copying function body bytes around."],["VMFunctionImport","An imported function."],["VMGlobalDefinition","The storage for a WebAssembly global defined within the instance."],["VMGlobalImport","The fields compiled code needs to access to utilize a WebAssembly global variable imported from another instance."],["VMInvokeArgument","The storage for a WebAssembly invocation argument"],["VMMemoryDefinition","The fields compiled code needs to access to utilize a WebAssembly linear memory defined within the instance, namely the start address and the size in bytes."],["VMMemoryImport","The fields compiled code needs to access to utilize a WebAssembly linear memory imported from another instance."],["VMSharedSignatureIndex","An index into the shared signature registry, usable for checking signatures at indirect calls."],["VMTableDefinition","The fields compiled code needs to access to utilize a WebAssembly table defined within the instance."],["VMTableImport","The fields compiled code needs to access to utilize a WebAssembly table imported from another instance."]],"trait":[["RuntimeLinearMemory","A linear memory"],["RuntimeMemoryCreator","A memory allocator"]],"type":[["VMTrampoline",""]]});