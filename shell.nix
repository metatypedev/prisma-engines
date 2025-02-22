{
  pkgs ? import <nixpkgs> { },
}:

let
  wasm-bindgen-cli = pkgs.wasm-bindgen-cli.override {
    version = "0.2.93";
    hash = "sha256-DDdu5mM3gneraM85pAepBXWn3TMofarVR4NbjMdz3r0=";
    cargoHash = "sha256-birrg+XABBHHKJxfTKAMSlmTVYLmnmqMDfRnmG6g/YQ=";
  };

in
pkgs.mkShell {
  packages = with pkgs; [
    binaryen
    cargo-insta
    cargo-nextest
    cargo-watch
    git
    graphviz
    jq
    llvmPackages_latest.bintools
    nodejs_22
    pnpm_9
    rustup
    wabt
    wasm-bindgen-cli
    wasm-pack
  ];

  nativeBuildInputs =
    with pkgs;
    [
      pkg-config
    ]
    ++ lib.optionals stdenv.isDarwin [
      perl
    ];

  buildInputs =
    with pkgs;
    [
      openssl.dev
    ]
    ++ lib.optionals stdenv.isDarwin [
      darwin.apple_sdk.frameworks.Security
      darwin.apple_sdk.frameworks.SystemConfiguration
      iconv
    ];

  shellHook =
    let
      useLld = "-C link-arg=-fuse-ld=lld";
    in
    pkgs.lib.optionalString pkgs.stdenv.isLinux ''
      if [ ! -f .cargo/config.toml ]; then
        export CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_RUSTFLAGS="${useLld}"
        export CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_RUSTFLAGS="${useLld}"
      fi
    '';
}
