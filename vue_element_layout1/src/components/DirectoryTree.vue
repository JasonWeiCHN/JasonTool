<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class DirectoryTree extends Vue {
        @Prop() private msg!: string;

        data = [{
            label: '第一章:基础知识',
            children: [
                {
                    label: '前端开发的演变',
                },
                {
                    label: '初始化项目',
                },
                {
                    label: '第一个组件',
                },
                {
                    label: '使用Ant Design组件',
                },
                {
                    label: '受控组件与非受控组件',
                },
            ]
        }, {
            label: '一级 2',
            children: [{
                label: '二级 2-1',
                children: [{
                    label: '三级 2-1-1'
                }]
            }, {
                label: '二级 2-2',
                children: [{
                    label: '三级 2-2-1'
                }]
            }]
        }, {
            label: '一级 3',
            children: [{
                label: '二级 3-1',
                children: [{
                    label: '三级 3-1-1'
                }]
            }, {
                label: '二级 3-2',
                children: [{
                    label: '三级 3-2-1'
                }]
            }]
        }]

        defaultProps =  {
            children: 'children',
            label: 'label'
        }

        handleNodeClick (data: any): void {
            console.log(data);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
