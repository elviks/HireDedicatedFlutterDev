# 🚀 FINAL FIX: Node 20 + Pinned pnpm for Nixpacks

## ✅ **Fix A Applied: Working with Nixpacks**

### **Files Updated:**

- ✅ `package.json` - Added `engines: node ">=20 <21"` and `packageManager: "pnpm@9.12.0"`
- ✅ `nixpacks.toml` - Updated to use Node 20 and prepare pnpm@9.12.0 before install
- ✅ `Dockerfile.node20` - Created Fix B option with Node 20 (backup)

### **🎯 Coolify Environment Variables Required:**

**In Coolify Dashboard → Your App → Build Settings → Environment Variables, add:**

```
NIXPACKS_NODE_VERSION=20
COREPACK_NPM_REGISTRY=https://registry.npmjs.org
NEXT_PUBLIC_GA_ID=G-MHGSBBP95T
```

### **🔄 Deployment Steps:**

1. **Add environment variables** in Coolify (above)
2. **Clear build cache**: Coolify → Actions → Clear build cache
3. **Redeploy** the application
4. **Verify**: Build logs should show Node 20.x and successful pnpm install

### **✅ Expected Success Indicators:**

```
✅ Node.js v20.x.x (not 18.20.5)
✅ corepack enable successful
✅ corepack prepare pnpm@9.12.0 --activate successful
✅ pnpm install --frozen-lockfile completes without errors
✅ No "Cannot find matching keyid" errors
```

### **🎯 Why This Fixes the Error:**

**Root Cause:** Node 18 + Corepack signature verification failure  
**Solution:** Node 20 + pinned pnpm version bypasses signature mismatch

The exact error you saw:

```
Error: Cannot find matching keyid
Node.js v18.20.5
```

Will be resolved with:

```
✅ Node.js v20.x.x
✅ corepack prepare pnpm@9.12.0 --activate
✅ pnpm install --frozen-lockfile
```

## 🎉 **GA4 Integration Status**

**🟢 READY** - GA4 tracking with measurement ID `G-MHGSBBP95T` will work immediately after successful deployment.

**This fix addresses the core issue while working WITH Coolify's Nixpacks preference instead of fighting it!** 🚀
