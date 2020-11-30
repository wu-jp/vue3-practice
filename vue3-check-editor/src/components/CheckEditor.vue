<template>
    <div class="check-editor">
        <div class="check-editor-inner">
            <div class="checkbox" :class="{checked: modelValue}" @click="handleChecked"></div>
            <label>
                <input class="editor" type="text" :value="title" @input="handleTextChange">
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckEditor",
        props: {
            modelValue: Boolean,
            title: String,
            titleModifiers: {
                default: () => ({}),
            }
        },
        setup(props, ctx) {
            console.log(props.titleModifiers)
            const handleChecked = () => {
                ctx.emit("update:modelValue", !props.modelValue)
            }

            const handleTextChange = (e) => {
                let value = e.target.value;
                if(props.titleModifiers.trim) {
                    value = value.trim()
                }
                ctx.emit("update:title", e.target.value)
            }

            return {
                handleChecked,
                handleTextChange,
            }
        }
    }
</script>

<style scoped>
    .check-editor {
        cursor: pointer;
    }
    .check-editor-inner {
        display: flex;
        align-items: center;
    }
    .checkbox {
        width: 15px;
        height: 15px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        transition: .2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .checkbox:hover,
    .checkbox.checked {
        border-color: #409eff;
    }
    .checkbox.checked::after {
        content: "";
        border-radius: 2px;
        width: 9px;
        height: 9px;
        background-color: #409eff;
    }
    .editor {
        border: none;
        outline: none;
        margin-left: 5px;
        border-bottom: 1px solid #dcdfe6;
        font-size: inherit;
    }
</style>