/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from "react"
import { useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import { formRootContext } from "../../formRoot/contexts"
import { Field } from "../Field"
import { hookFormContext } from "./contexts"
import { Form } from "@/components/ui/form"

export class CreateShadcnGridTemplate {
  baseField = Field

  constructor() {
    this.RenderTab = this.RenderTab.bind(this)
    this.RenderGroup = this.RenderGroup.bind(this)
    this.RenderField = this.RenderField.bind(this)
    this.Component = this.Component.bind(this)
  }

  RenderTab({ tabKey }: { tabKey: string }) {
    const tabObj = useContextSelector(formRootContext, (v) => v!.formSpec.Tab[tabKey])
    console.log("tabObj", tabObj)
    if (!tabObj) {
      return null
    }
    return (
      <div data-tab={tabKey}>
        {tabObj.groups.map((groupKey) => {
          return <this.RenderGroup key={groupKey} groupKey={groupKey} />
        })}
      </div>
    )
  }

  RenderGroup({ groupKey }: { groupKey: string }) {
    const groupObj = useContextSelector(formRootContext, (v) => v!.formSpec.Group[groupKey])
    if (!groupObj) {
      return null
    }
    return (
      <div data-group={groupKey}>
        {groupObj.fields.map((fieldKey) => {
          return <this.RenderField key={fieldKey} fieldKey={fieldKey} />
        })}
      </div>
    )
  }

  RenderField({ fieldKey }: { fieldKey: string }) {
    const fieldSpec = useContextSelector(formRootContext, (v) => v!.formSpec.Field[fieldKey])
    return <this.baseField fieldSpec={fieldSpec} />
  }

  Component() {
    const hookForm = useForm()
    const formObj = useContextSelector(formRootContext, (v) => {
      return Object.values(v?.formSpec?.Form || {})[0]
    })
    const tabsList = useMemo(() => {
      if (!formObj) {
        return null
      }
      return Object.values(formObj.tabs)
    }, [formObj])
    console.log("tabsList", tabsList)
    if (!tabsList) {
      return null
    }
    return (
      <Form {...hookForm}>
        <hookFormContext.Provider value={hookForm}>
          <div className="form-root">
            {tabsList.map((tab) => {
              return <this.RenderTab key={tab} tabKey={tab} />
            })}
          </div>
        </hookFormContext.Provider>
      </Form>
    )
  }
}

export const ShadcnGridTemplate = new CreateShadcnGridTemplate().Component
