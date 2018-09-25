<template>
    <el-card>
        <div id="editorElem"></div>
    </el-card>
</template>

<script>
    import wangEdit from 'wangeditor'
    export default {
        name:'wangEdit',
        mounted() {
            var editor = new wangEdit('#editorElem')
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()
        }
    }
</script>

<style scoped>

</style>